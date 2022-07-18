export const CreateRecipeNameForm = ({ setRecipeName, recipeName }: any) => {
  return (
    <div>
      <label htmlFor='name' className='text-2xl'>
        レシピ名
      </label>
      <input
        id='name'
        type='text'
        className='mt-5 block w-96 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg text-gray-900 '
        placeholder='レシピ名を記入'
        value={recipeName}
        onChange={(e: any) => {
          setRecipeName(e.target.value)
        }}
      />
    </div>
  )
}
