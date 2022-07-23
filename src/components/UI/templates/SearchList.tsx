import Link from 'next/link'
import React from 'react'
import { Layout } from '@/components/Layout'
import { SearchForm } from '@/components/UI/organisms/SearchForm'
import { useRecipeList } from '@/hooks/useRecipeList'

export const SearchList = () => {
  const { getRecipeList, list, searchValue, setSearchValue } = useRecipeList()
  console.log(list)
  return (
    <div className='mt-10'>
      <SearchForm
        getData={getRecipeList}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <div className='mt-5'>
        <p>検索結果</p>
        <ul>
          {list.map((data: any) => (
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
