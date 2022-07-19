import Link from 'next/link'
import React from 'react'

export const SearchResult = ({
  recipes,
  options,
  getTarget,
  recipeFlag,
  setPickDayId,
  onSubmitList,
}: any) => {
  return (
    <div className='mt-5'>
      <p>検索結果</p>
      <ul>
        {recipes.map((recipe: any, index: number) => (
          <div key={recipe.id} className='flex items-center py-4'>
            <Link href={`../../page/recipes/${recipe.id}`}>
              <a>
                <li className='hover:text-blue-800 hover:underline'>{recipe.recipeName}</li>
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
                  {options.map((option: any) => (
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
  )
}
