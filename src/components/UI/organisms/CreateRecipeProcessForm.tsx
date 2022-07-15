import { useForm, useFieldArray } from 'react-hook-form'
import { useCreateRecipe } from '@/hooks/useCreateRecipe'

export const CreateRecipeProcessForm = ({ register, handleSubmit }: any) => {
  const { onSubmitPost } = useCreateRecipe()
  const { control } = useForm()

  const { fields, append } = useFieldArray({
    control,
    name: 'recipeForm',
    keyName: 'key',
  })

  const onSubmit = (data: unknown) => {
    console.log(data)
  }

  const addInputForm = () => {
    append({ recipeProcess: '' })
  }

  return (
    <div>
      <div className='mt-20 flex items-center justify-start'>
        <label className='text-2xl'>工程</label>
        <button className='btn btn-ghost ml-5 bg-yellow-400 p-2' onClick={addInputForm}>
          工程追加ボタン
        </button>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className='py-5'>
          <div className='flex flex-wrap'>
            {fields.map((field, index) => (
              <div key={field.key} className='mt-5 flex w-full justify-center lg:w-1/2'>
                <label
                  htmlFor='number'
                  className='flex h-10 w-10 items-center justify-center rounded bg-gray-100'
                >
                  {index + 1}
                </label>
                <textarea
                  id='number'
                  rows={4}
                  {...register(`recipeForm.${index}.recipeProcess`)}
                  className='block w-96 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg text-gray-900 '
                  placeholder='レシピを記入'
                ></textarea>
              </div>
            ))}
          </div>
          <div className='flex items-center justify-center'>
            <button type='submit' className='btn btn-ghost bg-yellow-400 p-2' onClick={onSubmit}>
              ボタン
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
