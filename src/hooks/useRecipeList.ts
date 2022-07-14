import { useState } from 'react'

import { daysType } from '@/types/tableTypes'

export const useRecipeList = () => {
  const [recipes, setRecipes] = useState<any>([])
  const [pickDayId, setPickDayId] = useState<number>(0)
  const [recipeFlag, setRecipeFlag] = useState(false)
  const [tableData, setTableData] = useState<daysType[]>([])

  const getRecipe = async (e: any) => {
    e.preventDefault()
    setRecipeFlag(false)
    const response = await fetch('api/recipe', {
      method: 'GET',
    })
    const json = await response.json()
    if (response.ok) {
      console.log(response.status)
      console.log(json)
      setRecipes(json)
    } else {
      console.log(response.status)
    }
  }

  const getTarget = (e: any) => {
    const recipeData = [...recipes]
    const targetData = recipeData[e.target.id]
    setRecipes([targetData])
    setRecipeFlag(true)
  }

  const onSubmitList = (e: any) => {
    setRecipeFlag(false)
    const oldData = [...tableData]
    const newData = { ...oldData[pickDayId - 1], recipe: recipes[0].name }
    const newDataSet = oldData.map((data) => (data.tableId === Number(pickDayId) ? newData : data))
    setTableData(newDataSet)
    setRecipes([])
    setPickDayId(0)
  }

  const deleteRecipe = (e: any) => {
    const oldData = [...tableData]
    const newData = { ...oldData[e.target.id], recipe: '' }
    const newDatas = oldData.map((data, index) => (index === Number(e.target.id) ? newData : data))
    setTableData(newDatas)
  }

  return { getRecipe, getTarget, onSubmitList, deleteRecipe, tableData, setTableData,recipes,recipeFlag,setPickDayId }
}
