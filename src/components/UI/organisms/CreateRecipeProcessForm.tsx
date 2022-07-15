import { useCreateRecipe } from '@/hooks/useCreateRecipe'

export const CreateRecipeProcessForm = ({ register, handleSubmit }: any) => {
  const { onSubmitPost } = useCreateRecipe()

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitPost)} className=''>
        <div className='flex py-5'>
          <label
            htmlFor='number'
            className='flex h-10 w-10 items-center justify-center rounded bg-gray-100'
          >
            1
          </label>
          <textarea
            id='number'
            rows={4}
            {...register('recipe')}
            className='block w-96 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg text-gray-900 '
            placeholder='レシピを記入'
          ></textarea>
        </div>
      </form>
    </div>
  )
}
