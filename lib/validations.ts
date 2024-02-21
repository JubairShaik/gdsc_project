import * as z from "zod"

export const QuestionsSchema = z.object({
  title: z.string().min(5).max(130),
  explanation: z.string().min(100),
  tags: z.array(z.string().min(1).max(15)).min(1).max(3),
})



export const BlogSchema = z.object({
  title: z.string().min(5).max(530),
  explanation: z.string().min(1),
  tags: z.array(z.string().min(1).max(15)).min(1).max(4),
})


export const AnswerSchema = z.object({
  answer: z.string().min(100)
})



export const ProfileSchema = z.object({
  name : z.string().min(5).max(29),
  username : z.string().min(5).max(29),
  bio : z.string().min(10).max(1069),
  portfolioWebsite2  :  z.string().url(),
  portfolioWebsite  :  z.string().url(),
  linkedin  : z.string().url(),
  location  : z.string().min(2).max(29)
})