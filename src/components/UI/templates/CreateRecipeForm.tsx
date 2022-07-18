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

    onSubmitRecipeName,
    createRecipeDataSet,
    setCreateRecipeDataset,
  } = useCreateRecipe()

  useEffect(() => {
    setCreateRecipeDataset(initialDataSet)
  }, [])
  return (
    <div>
      <CreateRecipeNameForm />
      <CreateRecipeProcessForm
        createRecipeDataSet={createRecipeDataSet}
        setCreateRecipeDataset={setCreateRecipeDataset}
        addEmpty={addEmpty}
        deleteData={deleteData}
        handleChangeData={handleChangeData}
        submitProcessData={submitProcessData}
        onSubmitRecipeName={onSubmitRecipeName}
      />
    </div>
  )
}
