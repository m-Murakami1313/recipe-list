import { useState } from 'react'
import { createRecipeTypes, createIngredientsTypes } from '@/types/createRecipeTypes'

export const useCreateRecipe = () => {
  const [createRecipeDataSet, setCreateRecipeDataset] = useState<createRecipeTypes[]>([])
  const [createIngredientsDataSet, setCreateIngredientsDataSet] = useState<
    createIngredientsTypes[]
  >([])
  const [recipeName, setRecipeName] = useState<string>('')
  const [url, setUrl] = useState('')

  const addEmpty = () => {
    const newData = [...createRecipeDataSet, { processName: '' }]
    setCreateRecipeDataset(newData)
  }

  const deleteData = (e: any) => {
    e.preventDefault()
    const targetId = Number(e.target.id)
    const oldData = [...createRecipeDataSet]
    const newData = oldData.filter((data, index) => index !== targetId)
    setCreateRecipeDataset(newData)
  }

  const handleChangeData = (e: any) => {
    e.preventDefault()
    const targetValue = e.target.value
    const targetId = Number(e.target.id)
    const oldData = [...createRecipeDataSet]
    const newData = { ...oldData[targetId], processName: targetValue }
    const newDataSet = oldData.map((data, index) => (index === targetId ? newData : data))
    setCreateRecipeDataset(newDataSet)
  }

  const submitProcessData = async (e: any) => {
    e.preventDefault()
    const oldData = [...createRecipeDataSet]
    const newDataSet = oldData.map((data, index) => ({
      processName: data.processName,
      processNo: index + 1,
    }))
    const recipeDataSet = [recipeName, newDataSet, createIngredientsDataSet,url]
    console.log(recipeDataSet)
    const response = await fetch('../api/createRecipe', {
      method: 'POST',
      body: JSON.stringify(recipeDataSet),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (response.ok) {
      console.log(response.status)
    } else {
      console.log(response.status)
    }
  }
  const deleteIngredientsData = (e: any) => {
    e.preventDefault()
    const targetId = Number(e.target.id)
    const oldData = [...createIngredientsDataSet]
    const newData = oldData.filter((data, index) => index !== targetId)
    setCreateIngredientsDataSet(newData)
  }

  const handleChangeIngredientsName = (e: any) => {
    e.preventDefault()
    const targetValue = e.target.value
    const targetId = Number(e.target.id)
    const oldData = [...createIngredientsDataSet]
    const newData = { ...oldData[targetId], ingredientsName: targetValue }
    const newDataSet = oldData.map((data, index) => (index === targetId ? newData : data))
    setCreateIngredientsDataSet(newDataSet)
  }

  const handleChangeIngredientsWeight = (e: any) => {
    e.preventDefault()
    const targetValue = e.target.value
    const targetId = Number(e.target.id)
    const oldData = [...createIngredientsDataSet]
    const newData = { ...oldData[targetId], weight: targetValue }
    const newDataSet = oldData.map((data, index) => (index === targetId ? newData : data))
    setCreateIngredientsDataSet(newDataSet)
  }
  const addEmptyIngredients = () => {
    const newData = [...createIngredientsDataSet, { ingredientsName: '', weight: '' }]
    setCreateIngredientsDataSet(newData)
  }

  return {
    addEmpty,
    deleteData,
    handleChangeData,
    submitProcessData,
    createRecipeDataSet,
    setCreateRecipeDataset,
    recipeName,
    setRecipeName,
    deleteIngredientsData,
    handleChangeIngredientsName,
    handleChangeIngredientsWeight,
    createIngredientsDataSet,
    setCreateIngredientsDataSet,
    addEmptyIngredients,
    url,setUrl
  }
}
