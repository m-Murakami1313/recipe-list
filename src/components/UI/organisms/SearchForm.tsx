import React from 'react'
import { Input } from '../atom/Input'

interface Props {
  getData: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  searchValue: string
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
  label: string
}

export const SearchForm = ({ getData, searchValue, setSearchValue, label }: Props) => {
  return (
    <div>
      <form className='flex items-center'>
        <label
          htmlFor='default-search'
          className='flex h-12 w-24 items-center justify-center rounded bg-gray-100 text-center text-sm md:mr-5'
        >
          {label}
        </label>
        <div className='relative w-96'>
          <Input
            textValue={searchValue}
            handleOnChange={setSearchValue}
            placeholder={'レシピを検索'}
            textLength={20}
          />
          <button
            disabled={!searchValue}
            className='absolute bottom-1.5 right-2.5 rounded-lg bg-blue-700  px-4 py-2 text-sm font-medium text-white'
            onClick={getData}
            >
            Search
          </button>
        </div>
      </form>
            {searchValue.length >= 20 && (
              <p className='text-red-500'>２０文字以内で入力してください </p>
            )}
    </div>
  )
}
