import { createRecipeTypes } from '@/types/createRecipeTypes'

interface Props {
  addEmpty: () => void
  deleteData: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  handleChangeData: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  submitProcessData: (e: React.FormEvent<HTMLFormElement>) => void
  createRecipeDataSet: createRecipeTypes[]
  recipeName: string
}


export const CreateRecipeProcessForm = ({
  addEmpty,
  deleteData,
  handleChangeData,
  submitProcessData,
  createRecipeDataSet,
  recipeName,
}: Props) => {
  return (
    <div>
      <div className='mt-20 flex items-center justify-start'>
        <label className='text-2xl'>工程</label>
        <button className='btn btn-ghost ml-5 bg-yellow-400 p-2' onClick={addEmpty}>
          工程追加ボタン
        </button>
      </div>
      <div>
        <form className='py-5' onSubmit={submitProcessData}>
          <div className='flex flex-wrap'>
            {createRecipeDataSet.map((data: createRecipeTypes, index: number) => (
              <div key={index} className='mt-5 mr-5 justify-center'>
                <label
                  className='flex h-10 w-10 items-center justify-center rounded bg-gray-100 text-center'
                  htmlFor={index.toString()}
                >
                  {index + 1}
                </label>
                <textarea
                  id={index.toString()}
                  rows={4}
                  className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg text-gray-900 sm:w-96 '
                  placeholder='レシピを記入'
                  onChange={handleChangeData}
                  value={data.processName}
                  maxLength={160}
                ></textarea>
                <div>
                  {data.processName.length >= 160 && (
                    <p className='text-red-500'>１６０文字以内で入力してください </p>
                  )}
                </div>
                <button
                  id={index.toString()}
                  onClick={deleteData}
                  className='btn btn-ghost bg-yellow-400 p-2'
                >
                  工程削除
                </button>
              </div>
            ))}
          </div>
          <div className='mt-10 flex items-center'>
            <label className='text-2xl'>レシピ登録</label>
            <button
              disabled={!recipeName}
              type='submit'
              className='btn btn-ghost ml-5 bg-yellow-400 p-2'
            >
              レシピ登録
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
