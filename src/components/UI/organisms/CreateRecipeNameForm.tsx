import { Input } from '../atom/Input'

interface Props {
  setRecipeName: React.Dispatch<React.SetStateAction<string>>
  recipeName: string
  url: string
  setUrl: React.Dispatch<React.SetStateAction<string>>
}

export const CreateRecipeNameForm = ({ setRecipeName, recipeName, url, setUrl }: Props) => {
  return (
    <div>
      <div>
        <label htmlFor='name' className='text-2xl'>
          レシピ名
        </label>
        <Input
          textValue={recipeName}
          handleOnChange={setRecipeName}
          placeholder={'レシピ名を記入'}
        />
      </div>
      <div className='mt-10'>
        <label htmlFor='name' className='text-2xl'>
          参考URL
        </label>
        <Input textValue={url} handleOnChange={setUrl} placeholder={'参考URLを記入'} />
      </div>
    </div>
  )
}
