import React, { useEffect } from 'react'
import { CreateRecipeNameForm } from '../organisms/CreateRecipeNameForm'
import { CreateRecipeProcessForm } from '../organisms/CreateRecipeProcessForm'
import { useCreateRecipe } from '@/hooks/useCreateRecipe'
import { initialDataSet } from '@/libs/createRecipeData'

export const CreateRecipeForm = () => {
  const {
    addEmpty,
    deleteData,
    handleChangeData,
    submitProcessData,
    createRecipeDataSet,
    setCreateRecipeDataset,
    setRecipeName,
    recipeName,
  } = useCreateRecipe()

  useEffect(() => {
    setCreateRecipeDataset(initialDataSet)
  }, [])
  return (
    <div>
      <CreateRecipeNameForm setRecipeName={setRecipeName} recipeName={recipeName} />
      <CreateRecipeProcessForm
        createRecipeDataSet={createRecipeDataSet}
        addEmpty={addEmpty}
        deleteData={deleteData}
        handleChangeData={handleChangeData}
        submitProcessData={submitProcessData}
      />
    </div>
  )
}
