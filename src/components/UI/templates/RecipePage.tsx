import Link from 'next/link'
import React from 'react'

import { RecipeProcessTable } from '../organisms/RecipeProcessTable'
import { RecipeTable } from '../organisms/RecipeTable'

export const RecipePage = ({ recipeName, ingredients, process }: any) => {
  const tableHeadIngredients = ['使用原材料・調味料', '重さ']
  const tableHeadProcess = ['工程番号', '工程']
  return (
    <div>
      <div className='mb-10 flex items-end'>
        <h1 className='text-2xl'>レシピ名:{recipeName}</h1>
        <h2 className='ml-20'>参考URL:</h2>
      </div>
      <div className='mb-10'>
        <RecipeTable tableData={ingredients} tableHead={tableHeadIngredients} />
      </div>
      <div className='mb-10'>
        <RecipeProcessTable tableData={process} tableHead={tableHeadProcess} />
      </div>
    </div>
  )
}
