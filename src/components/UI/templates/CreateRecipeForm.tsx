import React from 'react'
import { CreateRecipeNameForm } from '../organisms/CreateRecipeNameForm'
import { CreateRecipeProcessForm } from '../organisms/CreateRecipeProcessForm'

export const CreateRecipeForm = ({register,handleSubmit}:any) => {
  return (
    <div>
      <CreateRecipeNameForm register={register}
              handleSubmit={handleSubmit}/>
      <div className='mt-10 pt-5'>
        <p>工程</p>
      </div>
      <CreateRecipeProcessForm register={register}
              handleSubmit={handleSubmit}/>
    </div>
  )
}
