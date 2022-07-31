import React, { useEffect } from 'react'

import { Input } from '../atom/Input'
import { SearchResult } from '../organisms/SearchResult'
import { SearchForm } from '@/components/UI/organisms/SearchForm'
import { Table } from '@/components/UI/organisms/Table'
import { useRecipeList } from '@/hooks/useRecipeList'
import { initialDataList, options } from '@/libs/tableData'

export const CreateRecipeListPage = () => {
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
    submitRecipeList,
    recipeListName,
    setRecipeListName,
    searchValue,
    setSearchValue,
  } = useRecipeList()

  useEffect(() => {
    setTableData(initialDataList)
  }, [])

  const label = 'レシピ検索'
  const placeholder = 'リストの名前を記入'
  return (
    <div>
      <form onSubmit={submitRecipeList}>
        <div className='mt-10 flex items-center justify-center'>
          <Table tableData={tableData} deleteRecipe={deleteRecipe} />
        </div>
        <div className='mt-10 flex items-center justify-center'>
          <Input
            textValue={recipeListName}
            handleOnChange={setRecipeListName}
            placeholder={placeholder}
          />
          <button type='submit' className='btn btn-ghost ml-7  bg-yellow-400 p-2'>
            レシピリストを登録
          </button>
        </div>
      </form>
      <div className='flex items-center justify-center'>
        <div>
          <div className='mt-10'>
            <SearchForm
              getData={getRecipe}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              label={label}
            />
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
