import React, { useEffect } from 'react'

import { SearchResult } from '../organisms/SearchResult'
import { SearchForm } from '@/components/UI/organisms/SearchForm'
import { Table } from '@/components/UI/organisms/Table'
import { useRecipeList } from '@/hooks/useRecipeList'
import { initialDataList, options } from '@/libs/tableData'

export const CreateRecipeList = () => {
  const {
    getRecipe,
    getTarget,
    onSubmitList,
    deleteRecipe,
    tableData,
    setTableData,
    recipes,
    recipeFlag,
    setPickDayId,
  } = useRecipeList()

  useEffect(() => {
    setTableData(initialDataList)
  }, [])
  return (
    <div>
      <div className='flex items-center justify-center'>
        <Table tableData={tableData} deleteRecipe={deleteRecipe} />
      </div>
      <div className='flex items-center justify-center'>
        <div>
          <div className='mt-10'>
            <SearchForm getData={getRecipe} />
          </div>
        </div>
      </div>
      <SearchResult
        recipes={recipes}
        getTarget={getTarget}
        recipeFlag={recipeFlag}
        setPickDayId={setPickDayId}
        options={options}
        onSubmitList={onSubmitList}
      />
    </div>
  )
}
