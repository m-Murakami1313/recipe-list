import React from 'react'

interface Props{
  textValue:string
   handleOnChange:React.Dispatch<React.SetStateAction<string>>
   placeholder:string
}

export const Input = ({ textValue, handleOnChange,placeholder }: Props) => {
  return (
    <input
      id='name'
      type='text'
      className='block w-96 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg text-gray-900 '
      placeholder={placeholder}
      value={textValue}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        handleOnChange(e.target.value)
      }}
    />
  )
}
