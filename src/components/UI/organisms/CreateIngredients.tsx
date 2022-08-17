import React from 'react'

import { createIngredientsTypes } from '@/types/createRecipeTypes'

interface Props {
  handleChangeIngredientsName: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleChangeIngredientsWeight: (e: React.ChangeEvent<HTMLInputElement>) => void
  deleteIngredientsData: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  createIngredientsDataSet: createIngredientsTypes[]
  addEmptyIngredients: () => void
}

export const CreateIngredients = ({
  handleChangeIngredientsName,
  handleChangeIngredientsWeight,
  deleteIngredientsData,
  createIngredientsDataSet,
  addEmptyIngredients,
}: Props) => {
  return (
    <div className='mt-20'>
      <div className='flex items-center'>
        <label htmlFor='name' className='text-2xl'>
          調味料・具材
        </label>
        <button className='btn btn-ghost ml-5 bg-yellow-400 p-2' onClick={addEmptyIngredients}>
          欄追加
        </button>
      </div>
      <div className='mt-5'>
        {createIngredientsDataSet.map((data: createIngredientsTypes, index: number) => (
          <div key={index} className=''>
            <input
              id={index.toString()}
              className='block w-4/5 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-base text-gray-900 sm:w-96  md:text-lg '
              placeholder='調味料・食材'
              onChange={handleChangeIngredientsName}
              value={data.ingredientsName}
              maxLength={20}
            />
            {data.ingredientsName.length >= 20 && (
              <p className='text-red-500'>２０文字以内で入力してください </p>
            )}
            <input
              id={index.toString()}
              className='block w-4/5 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-base text-gray-900 sm:w-96  md:text-lg'
              placeholder='使用量'
              onChange={handleChangeIngredientsWeight}
              value={data.weight}
              maxLength={20}
            />
            {data.weight.length >= 20 && (
              <p className='text-red-500'>２０文字以内で入力してください </p>
            )}
            <button className='btn btn-ghost bg-yellow-400 p-2' onClick={deleteIngredientsData}>
              欄削除
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
