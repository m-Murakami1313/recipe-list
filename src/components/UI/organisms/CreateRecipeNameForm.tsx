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

        <div>
          <Input
            textValue={recipeName}
            handleOnChange={setRecipeName}
            placeholder={'レシピ名を記入'}
            textLength={20}
          />
          {recipeName.length >= 20 && (
            <p className='text-red-500'>２０文字以内で入力してください </p>
          )}
        </div>
      </div>
      <div className='mt-10'>
        <label htmlFor='name' className='text-2xl'>
          参考URL
        </label>
        <Input
          textValue={url}
          handleOnChange={setUrl}
          placeholder={'参考URLを記入'}
          textLength={40}
        />
        {url.length >= 40 && <p className='text-red-500'>４０文字以内で入力してください </p>}
      </div>
    </div>
  )
}
