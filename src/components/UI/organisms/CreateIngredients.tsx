import React, { useState, useEffect } from 'react'

import { createIngredientsTypes } from '@/types/createRecipeTypes'

export const CreateIngredients = ({
  handleChangeIngredientsName,
  handleChangeIngredientsWeight,
  deleteIngredientsData,
  createIngredientsDataSet,
  addEmptyIngredients,
}: any) => {
  console.log(createIngredientsDataSet)

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
          <div key={index} className='flex'>
            <input
              id={index.toString()}
              className='block w-40 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg text-gray-900 '
              placeholder='調味料・食材'
              onChange={handleChangeIngredientsName}
              value={data.ingredientsName}
            />
            <input
              id={index.toString()}
              className='block w-40 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg text-gray-900 '
              placeholder='使用量'
              onChange={handleChangeIngredientsWeight}
              value={data.weight}
            />
            <button
              className='btn btn-ghost ml-5 bg-yellow-400 p-2'
              onClick={deleteIngredientsData}
            >
              欄削除
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
