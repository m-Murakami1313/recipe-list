import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { createRecipeTypes, createIngredientsTypes } from '@/types/createRecipeTypes'

export const useCreateRecipe = () => {
  const [createRecipeDataSet, setCreateRecipeDataset] = useState<createRecipeTypes[]>([])
  const [createIngredientsDataSet, setCreateIngredientsDataSet] = useState<
    createIngredientsTypes[]
  >([])
  const [recipeName, setRecipeName] = useState<string>('')
  const [url, setUrl] = useState<string>('')

  const { data: session } = useSession()




  const addEmpty = () => {
    const newData = [...createRecipeDataSet, { processName: '' }]
    setCreateRecipeDataset(newData)
  }

  const deleteData = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const targetId = Number(e.currentTarget.id)
    const oldData = [...createRecipeDataSet]
    const newData = oldData.filter((data, index) => index !== targetId)
    setCreateRecipeDataset(newData)
  }

  const handleChangeData = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault()
    const targetValue = e.currentTarget.value
    const targetId = Number(e.currentTarget.id)
    const oldData = [...createRecipeDataSet]
    const newData = { ...oldData[targetId], processName: targetValue }
    const newDataSet = oldData.map((data, index) => (index === targetId ? newData : data))
    setCreateRecipeDataset(newDataSet)
  }

  const submitProcessData = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const oldData = [...createRecipeDataSet]
    const newDataSet = oldData.map((data, index) => ({
      processName: data.processName,
      processNo: index + 1,
    }))
    const recipeDataSet = [recipeName, newDataSet, createIngredientsDataSet, url, session?.user.id]
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

  const deleteIngredientsData = 
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault()
      const targetId = Number(e.currentTarget.id)
      const oldData = [...createIngredientsDataSet]
      const newData = oldData.filter((data, index) => index !== targetId)
      setCreateIngredientsDataSet(newData)
    }
   

  const handleChangeIngredientsName =(e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const targetValue = e.target.value
    const targetId = Number(e.target.id)
    const oldData = [...createIngredientsDataSet]
    const newData = { ...oldData[targetId], ingredientsName: targetValue }
    const newDataSet = oldData.map((data, index) => (index === targetId ? newData : data))
    setCreateIngredientsDataSet(newDataSet)
  }

  const handleChangeIngredientsWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    url,
    setUrl,
  }
}
