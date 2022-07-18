import { useState } from 'react'
import { createRecipeTypes } from '@/types/createRecipeTypes'

export const useCreateRecipe = () => {
  const [createRecipeDataSet, setCreateRecipeDataset] = useState<createRecipeTypes[]>([])
  const [recipeName, setRecipeName] = useState<string>('')

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
    const recipeDataSet = [recipeName, newDataSet]
    console.log(recipeDataSet)
    const response = await fetch('../api/createRecipe', {
      method: 'POST',
      body: JSON.stringify(recipeDataSet),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const json = await response.json()
    if (response.ok) {
      console.log(response.status)
    } else {
      console.log(response.status)
    }
  }

  // const onSubmitRecipeName = async (data: any) => {
  //   const response = await fetch('api/user', {
  //     method: 'POST',
  //     body: JSON.stringify(data),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //   const json = await response.json()
  //   if (response.ok) {
  //     console.log(response.status)
  //     console.log(json)
  //   } else {
  //     console.log(response.status)
  //   }
  // }

  return {
    addEmpty,
    deleteData,
    handleChangeData,
    submitProcessData,
    createRecipeDataSet,
    setCreateRecipeDataset,
    recipeName,
    setRecipeName,
  }
}
