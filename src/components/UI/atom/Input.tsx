import React from 'react'

interface Props {
  textValue: string
  handleOnChange: React.Dispatch<React.SetStateAction<string>>
  placeholder: string
  textLength:number
}

export const Input = ({ textValue, handleOnChange, placeholder,textLength }: Props) => {
  return (
    <input
      maxLength={textLength}
      id='name'
      type='text'
      className='block w-96 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg text-gray-900 '
      placeholder={placeholder}
      value={textValue}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length <= textLength) {
          handleOnChange(e.target.value)
        }
      }}
    />
  )
}
