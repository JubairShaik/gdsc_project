import Question from '@/components/forms/Question'
import { getQuestionById } from '@/lib/actions/question.action';
import { getUserById } from '@/lib/actions/user.action';
import { ParamsProps } from '@/types';
import { auth } from '@clerk/nextjs'

const Page = async ({ params }: ParamsProps) => {
  const { userId } = auth();
// @ts-ignore
  if(!userId) return null;
// @ts-ignore
  const mongoUser = await getUserById({ userId })
  const result = await getQuestionById({ questionId: params.id})

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Edit Question</h1>

      <div className="mt-9">
        <Question 
        // @ts-ignore
          type="Edit"
          // @ts-ignore
          mongoUserId={mongoUser._id}
          // @ts-ignore
          questionDetails={JSON.stringify(result)}
        />
      </div>
    </>
  )
}

export default Page