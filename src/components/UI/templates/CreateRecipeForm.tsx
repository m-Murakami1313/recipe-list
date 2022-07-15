import React from 'react'
import { CreateRecipeNameForm } from '../organisms/CreateRecipeNameForm'
import { CreateRecipeProcessForm } from '../organisms/CreateRecipeProcessForm'

export const CreateRecipeForm = ({ register, handleSubmit }: any) => {
  return (
    <div>
      <CreateRecipeNameForm register={register} handleSubmit={handleSubmit} />
      <CreateRecipeProcessForm register={register} handleSubmit={handleSubmit} />
    </div>
  )
}
