import { useRouter } from 'next/router'
import React from 'react'

import { RecipeListTable } from '../organisms/RecipeListTable'

export const RecipeListPage = ({ data }: any) => {
  const tableData = [...data.list_recipe].sort((a, b) => a.tableNo - b.tableNo)
  const router = useRouter()

  return (
    <div>
      <div className='mb-10'>
        <h1 className='text-2xl'>レシピリスト名:{data.listName}</h1>
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
