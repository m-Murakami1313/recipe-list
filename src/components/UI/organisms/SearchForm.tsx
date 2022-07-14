import React from 'react'

export const SearchForm = ({getData}:any) => {
  return (
    <div>
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
            onClick={getData}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  )
}
