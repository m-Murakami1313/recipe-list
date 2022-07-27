import { useSession } from 'next-auth/react'
import { useState } from 'react'

import { daysType } from '@/types/tableTypes'

export const useRecipeList = () => {
  const [recipes, setRecipes] = useState<any>([])
  const [pickDayId, setPickDayId] = useState<number>(0)
  const [recipeFlag, setRecipeFlag] = useState(false)
  const [tableData, setTableData] = useState<daysType[]>([])
  const [recipeListName, setRecipeListName] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [list, setList] = useState([])

  const { data: session } = useSession()

  const userId = session?.user.id

  const getRecipe = async (e: any) => {
    e.preventDefault()
    setRecipeFlag(false)
    const response = await fetch('../../api/searchRecipeDataAPI', {
      method: 'POST',
      body: JSON.stringify([searchValue, userId]),
      headers: {
        'Content-Type': 'application/json',
      },
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
    e.preventDefault()
    setRecipeFlag(false)
    const oldData = [...tableData]
    const newData = { ...oldData[pickDayId - 1], recipe: recipes[0].recipeName, id: recipes[0].id }
    const newDataSet = oldData.map((data) => (data.tableNo === Number(pickDayId) ? newData : data))
    setTableData(newDataSet)
    setRecipes([])
    setPickDayId(0)
  }

  const deleteRecipe = (e: any) => {
    e.preventDefault()
    const oldData = [...tableData]
    const newData = { ...oldData[e.target.id], recipe: '' }
    const newDatas = oldData.map((data, index) => (index === Number(e.target.id) ? newData : data))
    setTableData(newDatas)
  }

  const submitRecipeList = async (e: any) => {
    e.preventDefault()
    setRecipeFlag(false)
    const newData = [...tableData]
    const list = newData.map((data) => ({
      tableNo: data.tableNo,
      recipeId: data.id,
      dayOfWeek: data.day,
    }))
    const newList = list.filter((data) => {
      return !(data.recipeId === '')
    })
    const formData = [newList, { userId: userId }, { listName: recipeListName }]
    console.log(newList)
    const response = await fetch('../../api/createRecipeListAPI', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (response.ok) {
      console.log(response.status)
    } else {
      console.log(response.status)
      console.log(response)
    }
  }

  const getRecipeList = async (e: any) => {
    e.preventDefault()
    const response = await fetch('../../api/searchRecipeListAPI', {
      method: 'POST',
      body: JSON.stringify([searchValue, userId]),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const json = await response.json()
    if (response.ok) {
      console.log(response.status)
      console.log(json)
      setList(json)
    } else {
      console.log(response.status)
    }
  }

  return {
    getRecipe,
    getTarget,
    onSubmitList,
    deleteRecipe,
    tableData,
    setTableData,
    recipes,
    recipeFlag,
    setPickDayId,
    setRecipeFlag,
    submitRecipeList,
    recipeListName,
    setRecipeListName,
    searchValue,
    setSearchValue,
    getRecipeList,
    list,
  }
}
