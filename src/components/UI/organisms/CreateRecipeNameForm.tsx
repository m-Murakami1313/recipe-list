import { Input } from '../atom/Input'

export const CreateRecipeNameForm = ({ setRecipeName, recipeName }: any) => {
  const placeholder = 'レシピ名を記入'
  return (
    <div>
      <label htmlFor='name' className='text-2xl'>
        レシピ名
      </label>
      <Input textValue={recipeName} handleOnChange={setRecipeName} placeholder={placeholder} />
    </div>
  )
}
