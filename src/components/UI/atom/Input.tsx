import React, { memo } from 'react'

interface Props {
  textValue: string
  handleOnChange: React.Dispatch<React.SetStateAction<string>>
  placeholder: string
  textLength: number
}

// eslint-disable-next-line react/display-name
export const Input = memo(({ textValue, handleOnChange, placeholder, textLength }: Props) => {
  return (
    <input
      maxLength={textLength}
      id='name'
      type='text'
      className='block h-12 w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 sm:w-96 md:text-lg '
      placeholder={placeholder}
      value={textValue}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length <= textLength) {
          handleOnChange(e.target.value)
        }
      }}
    />
  )
})
