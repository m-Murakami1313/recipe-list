import Link from 'next/link'
import React from 'react'

import { recipeListType } from '@/types/createRecipeListTypes'
interface Props {
  recipes: recipeListType[]
  options: { day: string; id: number }[]
  getTarget: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  recipeFlag: boolean
  setPickDayId: React.Dispatch<React.SetStateAction<string>>
  onSubmitList: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}


export const SearchResult = ({
  recipes,
  options,
  getTarget,
  recipeFlag,
  setPickDayId,
  onSubmitList,
}: Props) => {
  return (
    <div className='mt-5'>
      <p>検索結果</p>
      <ul>
        {recipes.map((recipe: any, index: number) => (
          <div key={recipe.id} className='py-4 md:flex md:items-center'>
            <div className='flex items-center  py-4'>
              <Link href={`../../recipes/${recipe.id}`}>
                <a>
                  <li className='hover:text-blue-800 hover:underline'>{recipe.recipeName}</li>
                </a>
              </Link>
              <button className='pl-7' onClick={getTarget} id={index.toString()}>
                選択
              </button>
            </div>
            {recipeFlag && (
              <div>
                <select
                  className='select max-w-xs md:mx-10'
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setPickDayId(e.target.value)
                  }}
                  defaultValue={0}
                >
                  <option>登録する曜日を選んでください</option>
                  {options.map((option: { day: string; id: number }) => (
                    <option value={option.id} key={option.id}>
                      {option.day}
                    </option>
                  ))}
                </select>
                <button onClick={onSubmitList}>登録</button>
              </div>
            )}
          </div>
        ))}
      </ul>
    </div>
  )
}
