import Link from 'next/link'
import React from 'react'
import { SearchForm } from '@/components/UI/organisms/SearchForm'
import { useRecipeList } from '@/hooks/useRecipeList'

export const SearchRecipes = () => {
  const { recipes, getRecipe, searchValue, setSearchValue } = useRecipeList()
  const label = 'レシピ検索'
  return (
    <div className='mt-10'>
      <SearchForm
        getData={getRecipe}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        label={label}
      />
      <div className='mt-5'>
        <p>検索結果</p>
        <ul>
          {recipes.map((recipe: any) => (
            <div key={recipe.id} className='flex items-center py-4'>
              <Link href={`../../recipes/${recipe.id}`}>
                <a>
                  <li className='hover:text-blue-800 hover:underline'>{recipe.recipeName}</li>
                </a>
              </Link>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}
