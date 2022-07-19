import React from 'react'

export const Input = ({ textValue, handleOnChange,placeholder }: any) => {
  return (
    <input
      id='name'
      type='text'
      className='block w-96 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg text-gray-900 '
      placeholder={placeholder}
      value={textValue}
      onChange={(e: any) => {
        handleOnChange(e.target.value)
      }}
    />
  )
}
