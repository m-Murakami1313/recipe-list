import Link from 'next/link'
import React from 'react'

import { SearchForm } from '@/components/UI/organisms/SearchForm'
import { useRecipeList } from '@/hooks/useRecipeList'
import { listDataType } from '@/types/createRecipeListTypes'

export const SearchList = () => {
  const { getRecipeList, listData, searchValue, setSearchValue } = useRecipeList()
  const label = 'リスト検索'

  return (
    <div className='mt-10'>
      <SearchForm
        label={label}
        getData={getRecipeList}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <div className='mt-5'>
        <p>検索結果</p>
        <ul>
          {listData.map((data: listDataType) => (
            <div key={data.id} className='flex items-center py-4'>
              <Link href={`../../recipes/list/${data.id}`}>
                <a>
                  <li className='hover:text-blue-800 hover:underline'>{data.listName}</li>
                </a>
              </Link>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}
