// @ts-nocheck

"use server";

import { connectToDatabase } from "../mongoose";
import {
  CreateBlogParams,
  GetBlogsParams,
  GetBlogByIdParams,
  BlogVoteParams ,
  DeleteBlogParams,
  RecommendedParams,
  EditBlogParams
} from "./shared.types";
import { revalidatePath } from "next/cache";
import User from "@/database/user.model";
import Tag from "@/database/tag.model";
import Blog from "@/database/blog.model";
import Interaction from "@/database/interaction.model";
import { FilterQuery } from 'mongoose';
 

export async function getBlogs(params: GetBlogsParams) {
  try {
    connectToDatabase();

    const { searchQuery, filter, page = 1, pageSize = 10 } = params;

    // Calculcate the number of posts to skip based on the page number and page size
    const skipAmount = (page - 1) * pageSize;

    const query: FilterQuery<typeof Blog> = {};

    if(searchQuery) {
      query.$or = [
        { title: { $regex: new RegExp(searchQuery, "i")}},
        { content: { $regex: new RegExp(searchQuery, "i")}},
      ]
    }

    let sortOptions = {};

    switch (filter) {
      case "newest":
        sortOptions = { createdAt: - 1 }
        break;
      case "frequent":
        sortOptions = { views: -1 }
        break;
      case "unanswered":
        query.answers = { $size: 0 }
        break;
      default:
        break;
    }

    const blogs = await Blog.find(query)
      .populate({ path: 'tags', model: Tag })
      .populate({ path: 'author', model: User })
      .skip(skipAmount)
      .limit(pageSize)
      .sort(sortOptions)

    const totalBlogs = await Blog.countDocuments(query);

    const isNext = totalBlogs > skipAmount + blogs.length;

    return { blogs, isNext };
  } catch (error) {
    console.log(error)
    throw error;
  }
}


export async function createBlog(params: CreateBlogParams) {
  try {
    connectToDatabase();

    const { title, content, tags, author, path } = params;

    // Create the question
    const blog = await Blog.create({
      title,
      content,
      author
    });

    const tagDocuments = [];

    // Create the tags or get them if they already exist
    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, "i") } }, 
        { $setOnInsert: { name: tag }, $push: { blogs: blog._id } },
        { upsert: true, new: true }
      )

      tagDocuments.push(existingTag._id);
    }

    await Blog.findByIdAndUpdate(blog._id, {
      $push: { tags: { $each: tagDocuments }}
    });

    // Create an interaction record for the user's ask_question action
    // await Interaction.create({
    //   user: author,
    //   action: "ask_question",
    //   question: blog._id,
    //   tags: tagDocuments,
    // })

    // Increment author's reputation by +5 for creating a question
    await User.findByIdAndUpdate(author, { $inc: { reputation: 5 }})

    revalidatePath(path)
  } catch (error) {
    console.log(error);
  }
}


export async function getBlogById(params: GetBlogByIdParams) {
  try {
    connectToDatabase();

    const { blogId } = params;

    const blog = await Blog.findById(blogId)
      .populate({ path: "tags", model: Tag, select: "_id name" })
      .populate({
        path: "author",
        model: User,
        select: "_id clerkId name picture",
      });

    return blog ;
  } catch (error) {
    console.log(error);
    throw error;
  }
}




















export async function upvoteBlog(params:BlogVoteParams) {
    try {
      connectToDatabase();
  
      const { blogId, userId, hasupVoted, hasdownVoted, path } = params;
  
      let updateQuery = {};
  
      if(hasupVoted) {
        updateQuery = { $pull: { upvotes: userId }}
      } else if (hasdownVoted) {
        updateQuery = { 
          $pull: { downvotes: userId },
          $push: { upvotes: userId }
        }
      } else {
        updateQuery = { $addToSet: { upvotes: userId }}
      }
  
      const blog = await Blog.findByIdAndUpdate(blogId, updateQuery, { new: true });
  
      if(!blog) {
        throw new Error("Question not found");
      }
  
      // Increment author's reputation by +1/-1 for upvoting/revoking an upvote to the question
      await User.findByIdAndUpdate(userId, {
        $inc: { reputation: hasupVoted ? -1 : 1}
      })
  
      // Increment author's reputation by +10/-10 for recieving an upvote/downvote to the question
      await User.findByIdAndUpdate(blog.author, {
        $inc: { reputation: hasupVoted ? -10 : 10}
      })
  
      revalidatePath(path);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  
  export async function downvoteBlog(params: BlogVoteParams) {
    try {
      connectToDatabase();
  
      const { blogId, userId, hasupVoted, hasdownVoted, path } = params;
  
      let updateQuery = {};
  
      if(hasdownVoted) {
        updateQuery = { $pull: { downvote: userId }}
      } else if (hasupVoted) {
        updateQuery = { 
          $pull: { upvotes: userId },
          $push: { downvotes: userId }
        }
      } else {
        updateQuery = { $addToSet: { downvotes: userId }}
      }
  
      const blog = await Blog.findByIdAndUpdate(blogId, updateQuery, { new: true });
  
      if(!blog) {
        throw new Error("Question not found");
      }
  
      // Increment author's reputation
  
        // Increment author's reputation
        await User.findByIdAndUpdate(userId, { 
          $inc: { reputation: hasdownVoted ? -2 : 2 }
        })
    
        await User.findByIdAndUpdate(blog.author, { 
          $inc: { reputation: hasdownVoted ? -10 : 10 }
        })
  
        
  
      revalidatePath(path);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  
  export async function deleteBlog(params: DeleteBlogParams) {
    try {
      connectToDatabase();
  
      const { blogId, path } = params;
  
      await Blog.deleteOne({ _id:blogId });
      await Interaction.deleteMany({ blog:blogId });
      await Tag.updateMany({ blogs: blogId }, { $pull: { blogs:blogId }});
  
      revalidatePath(path);
    } catch (error) {
      console.log(error);
    }
  }
  
  
  
  // export async function getHotQuestions() {
  //   try {
  //     connectToDatabase();
  
  //     const hotQuestions = await Question.find({})
  //     .sort({views : -1 , upvotes : -1})
  //     .limit(4)
      
  //     return hotQuestions
      
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  
  
  export async function getRecommendedBlogs(params:  RecommendedParams ) {
    try {
      await connectToDatabase();
  
      const { userId, page = 1, pageSize = 20, searchQuery } = params;
  
      // find user
      const user = await User.findOne({ clerkId: userId });
  
      if (!user) {
        throw new Error("user not found");
      }
  
      const skipAmount = (page - 1) * pageSize;
  
      // Find the user's interactions
      const userInteractions = await Interaction.find({ user: user._id })
        .populate("tags")
        .exec();
  
      // Extract tags from user's interactions
      const userTags = userInteractions.reduce((tags, interaction) => {
        if (interaction.tags) {
          tags = tags.concat(interaction.tags);
        }
        return tags;
      }, []);
  
      // Get distinct tag IDs from user's interactions
      const distinctUserTagIds = [
        // @ts-ignore
        ...new Set(userTags.map((tag: any) => tag._id)),
      ];
  
      const query: FilterQuery<typeof Blog> = {
        $and: [
          { tags: { $in: distinctUserTagIds } }, // Questions with user's tags
          { author: { $ne: user._id } }, // Exclude user's own questions
        ],
      };
  
      if (searchQuery) {
        query.$or = [
          { title: { $regex: searchQuery, $options: "i" } },
          { content: { $regex: searchQuery, $options: "i" } },
        ];
      }
  
      const totalBlogs = await Blog.countDocuments(query);
  
      const recommendedBlogs = await Blog.find(query)
        .populate({
          path: "tags",
          model: Tag,
        })
        .populate({
          path: "author",
          model: User,
        })
        .skip(skipAmount)
        .limit(pageSize);
  
      const isNext = totalBlogs > skipAmount + recommendedBlogs.length;
  
      return { questions: recommendedBlogs, isNext };
    } catch (error) {
      console.error("Error getting recommended questions:", error);
      throw error;
    }
  }
  
  
  
  export async function editBlog(params: EditBlogParams) {
    try {
      connectToDatabase();
  
      const { blogId, title, content, path } = params;
  
      const blog = await Blog.findById(blogId).populate("tags");
      
  
      if(!blog) {
        throw new Error("Blog not found");
      } 
  
      
      blog.title = title;
      blog.content = content;
    
      
  
      await blog.save();
  
      revalidatePath(path);
    } catch (error) {
      console.log(error);
    }
  }
  
  
  








