import React, { useEffect } from 'react'
import { CreateIngredients } from '../organisms/CreateIngredients'
import { CreateRecipeNameForm } from '../organisms/CreateRecipeNameForm'
import { CreateRecipeProcessForm } from '../organisms/CreateRecipeProcessForm'
import { useCreateRecipe } from '@/hooks/useCreateRecipe'
import { initialDataSet, initialDataIngredients } from '@/libs/createRecipeData'

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
    deleteIngredientsData,
    handleChangeIngredientsName,
    handleChangeIngredientsWeight,
    createIngredientsDataSet,
    setCreateIngredientsDataSet,
    addEmptyIngredients,
    url,
    setUrl,
  } = useCreateRecipe()

  useEffect(() => {
    setCreateRecipeDataset(initialDataSet)
    setCreateIngredientsDataSet(initialDataIngredients)
  }, [])

  return (
    <div>
      <CreateRecipeNameForm
        setRecipeName={setRecipeName}
        recipeName={recipeName}
        url={url}
        setUrl={setUrl}
      />
      <CreateIngredients
        deleteIngredientsData={deleteIngredientsData}
        handleChangeIngredientsName={handleChangeIngredientsName}
        handleChangeIngredientsWeight={handleChangeIngredientsWeight}
        createIngredientsDataSet={createIngredientsDataSet}
        addEmptyIngredients={addEmptyIngredients}
      />
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
