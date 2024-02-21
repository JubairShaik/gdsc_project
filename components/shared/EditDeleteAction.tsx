// @ts-nocheck

"use client";

import { deleteAnswer } from "@/lib/actions/answer.action";
import { deleteQuestion } from "@/lib/actions/question.action";
import { deleteBlog } from "@/lib/actions/blog.action";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface Props {
  type: string;
  itemId: string;
}

const EditDeleteAction = ({ type, itemId }: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/question/edit/${JSON.parse(itemId)}`);
  };

  const handleDelete = async () => {
    // Before Deleting ! We Should Know What We are Deleting !

    if (type === "Question") {
      // Delete question
      await deleteQuestion({
        questionId: JSON.parse(itemId),
        path: pathname, // importing From NEXT NAVIGATION !
      });
    } else if (type === "Blog") {
      // Delete blog
      await deleteBlog({
        blogId: JSON.parse(itemId),
        path: pathname, // importing From NEXT NAVIGATION !
      });
    } else if (type === "Answer") {
      // Delete answer
      await deleteAnswer({
        answerId: JSON.parse(itemId),
        path: pathname, // importing From NEXT NAVIGATION !
      });
    }
  };

  return (
    <div className="flex items-center justify-end gap-3 max-sm:w-full">
      <div>
        {type === "Question" && (
          <Image
            src="/assets/icons/edit.svg"
            alt="Edit"
            width={22}
            height={22}
            className="cursor-pointer object-contain"
            onClick={handleEdit}
          />
        )}
      </div>


      <div>
        {type === "Blog" && (
          <Image
            src="/assets/icons/edit.svg"
            alt="Edit"
            width={22}
            height={22}
            className="cursor-pointer object-contain"
            onClick={handleEdit}
          />
        )}
      </div>

      <AlertDialog>
        <AlertDialogTrigger>
          <Image
            src="/assets/icons/trash.svg"
            alt="Delete"
            width={23}
            height={23}
            className="cursor-pointer object-contain"
            // onClick={handleDelete}
          />
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you Absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete Your
              Question and remove your data from our servers .
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default EditDeleteAction;
