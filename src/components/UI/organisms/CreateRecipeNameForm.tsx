import { useCreateRecipe } from '@/hooks/useCreateRecipe'


export const CreateRecipeNameForm = ({register,handleSubmit}:any) => {
  const { onSubmitRecipeName } = useCreateRecipe()


  return (
    <div >
      <form onSubmit={handleSubmit(onSubmitRecipeName)}>
        <label htmlFor='name' className='text-2xl'>レシピ名</label>
        <input
          id='name'
          type='text'
          {...register('post')}
          className='mt-5 block w-96 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg text-gray-900 '
          placeholder='レシピ名を記入'
        />
      </form>
    </div>
  )
}
