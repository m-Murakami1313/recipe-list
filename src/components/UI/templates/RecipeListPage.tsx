import React from 'react'

import { RecipeListTable } from '../organisms/RecipeListTable'
import { initialDataList } from '@/libs/tableData'

export const RecipeListPage = ({ listName, id }:any) => {
  const tableData = initialDataList
  return (
    <div>
       <div className='mb-10'>
        <h1 className='text-2xl'>レシピリスト名:{listName}</h1>
      </div>
      <RecipeListTable tableData={tableData} />
    </div>
  )
}
