import React from 'react'

import { RecipeProcessTable } from '../organisms/RecipeProcessTable'
import { RecipeTable } from '../organisms/RecipeTable'

interface Props {
  recipeName: string
  ingredients: {
    ingredientsName: string
    weight: string
    id: string
  }[]
  process: {
    processNo: number
    processName: string
    id: string
  }[]
  url: string
}

export const RecipePage = ({ recipeName, ingredients, process, url }: Props) => {
  const tableHeadIngredients = ['使用原材料・調味料', '重さ']
  const tableHeadProcess = ['工程番号', '工程']
  return (
    <div>
      <div className='mb-10'>
        <h1 className='text-xl sm:text-2xl'>レシピ名</h1>
        <p className='text-xl sm:text-2xl'>{recipeName}</p>
        <h2 className='mt-5 text-base sm:text-xl '>参考URL</h2>
        <a className='break-words' href={`${url}`} target='_blank' rel='noopener noreferrer'>
          <h3 className='hover:text-blue-800 hover:underline '>{url}</h3>
        </a>
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
