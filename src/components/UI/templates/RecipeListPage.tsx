import { useRouter } from 'next/router'
import React from 'react'

import { RecipeListTable } from '../organisms/RecipeListTable'

interface Data {
  listName: string
  list_recipe: {
    recipeId: string
    tableNo: number
    dayOfWeek: string
    recipe: {
      recipeName: string
    }
  }[]
}

export const RecipeListPage = ({ listName, list_recipe }: Data) => {
  const router = useRouter()
  const tableData = [...list_recipe].sort((a, b) => a.tableNo - b.tableNo)

  return (
    <div>
      <div className='mb-10'>
        <h1 className='text-2xl'>レシピリスト名:{listName}</h1>
      </div>
      <RecipeListTable tableData={tableData} />
      <div className='mt-40 ml-20'>
        <button className='btn btn-ghost bg-yellow-400' onClick={() => router.back()}>
          戻る
        </button>
      </div>
    </div>
  )
}
