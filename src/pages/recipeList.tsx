import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Layout } from '@/components/Layout'

import { Table } from '@/components/UI/atom/Table'
import { useDeleteRecipe } from '@/hooks/useDeleteRecipe'
import { dayOfWeek } from '@/libs/tableData'

const RecipeList: NextPage = () => {
  const [recipes, setRecipes] = useState([])
  const [pick, setPick] = useState('')
  const [recipeFlag, setRecipeFlag] = useState(false)

  const { tableData, setTableData, deleteRecipe } = useDeleteRecipe()

  useEffect(() => {
    setTableData(dayOfWeek)
  }, [])

  const options = ['月', '火', '水', '木', '金', '土']

  const getTarget = (e: any) => {
    const recipeData = [...recipes]
    const targetData = recipeData[e.target.id]
    setRecipes([targetData])
    setRecipeFlag(true)
  }

  const onSubmitList = () => {
    setRecipeFlag(false)
    setRecipes([])
  }

  const getRecipe = async (e: any) => {
    e.preventDefault()
    const response = await fetch('api/recipe', {
      method: 'GET',
    })
    const json = await response.json()
    if (response.ok) {
      console.log(response.status)
      console.log(json)
      setRecipes(json)
    } else {
      console.log(response.status)
    }
  }
  return (
    <div>
      <Layout title='Home'>
        <div className='flex items-center justify-center'>
          <Table tableData={tableData} deleteRecipe={deleteRecipe} />
        </div>
        <div className='flex items-center justify-center'>
          <div>
            <div className='mt-10'>
              <form className='flex items-center justify-center'>
                <label
                  htmlFor='default-search'
                  className='flex h-12 w-24 items-center justify-center rounded bg-gray-100 text-sm md:mr-5 md:h-14 md:w-24'
                >
                  レシピ検索
                </label>
                <div className='relative w-96'>
                  <div className='pointer-events-none absolute inset-y-0 left-0 flex  items-center pl-3'>
                    <svg
                      className='h-5 w-5 text-gray-500'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                      ></path>
                    </svg>
                  </div>
                  <input
                    type='search'
                    id='default-search'
                    className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900'
                    placeholder=''
                    required
                  />
                  <button
                    className='absolute right-2.5 bottom-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white'
                    onClick={getRecipe}
                  >
                    Search
                  </button>
                </div>
              </form>
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
                        setPick(e.target.value)
                      }}
                    >
                      <option disabled selected>
                        Pick your favorite Simpson
                      </option>
                      {options.map((option) => (
                        <option key={option}>{option}</option>
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
