import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Layout } from '@/components/Layout'

import { Table } from '@/components/UI/atom/Table'
import { SearchForm } from '@/components/UI/organisms/SearchForm'
import { useRecipeList } from '@/hooks/useRecipeList'
import { initialDataList, options } from '@/libs/tableData'

const RecipeList: NextPage = () => {
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
      <Layout title='Home'>
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
        <div className='mt-5'>
          <p>検索結果</p>
          <ul>
            {recipes.map((recipe: any, index: number) => (
              <div key={recipe.id} className='flex items-center py-4'>
                <Link href='/'>
                  <a>
                    <li className='hover:text-blue-800 hover:underline'>{recipe.name}</li>
                  </a>
                </Link>
                <button className='pl-7' onClick={getTarget} id={index.toString()}>
                  選択
                </button>
                {recipeFlag && (
                  <>
                    <select
                      className='select mx-10 max-w-xs'
                      onChange={(e: any) => {
                        setPickDayId(e.target.value)
                      }}
                      defaultValue={0}
                    >
                      <option>登録する曜日を選んでください</option>
                      {options.map((option) => (
                        <option value={option.id} key={option.id}>
                          {option.day}
                        </option>
                      ))}
                    </select>
                    <button onClick={onSubmitList}>登録</button>
                  </>
                )}
              </div>
            ))}
          </ul>
        </div>
      </Layout>
    </div>
  )
}

export default RecipeList
