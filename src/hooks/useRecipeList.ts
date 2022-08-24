import { useSession } from 'next-auth/react'
import { useCallback, useState } from 'react'

import { listDataType, recipeListType } from '@/types/createRecipeListTypes'
import { daysType } from '@/types/tableTypes'

export const useRecipeList = () => {
  const [recipes, setRecipes] = useState<recipeListType[]>([])
  const [pickDayId, setPickDayId] = useState<string>('')
  const [recipeFlag, setRecipeFlag] = useState<boolean>(false)
  const [tableData, setTableData] = useState<daysType[]>([])
  const [recipeListName, setRecipeListName] = useState<string>('')
  const [searchValue, setSearchValue] = useState<string>('')
  const [listData, setListData] = useState<listDataType[]>([])

  const { data: session } = useSession()

  const userId = session?.user.id

  const getRecipe = useCallback(async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setRecipeFlag(false)
    const response = await fetch('../../api/searchRecipeDataAPI', {
      method: 'POST',
      body: JSON.stringify([searchValue, userId]),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const json: recipeListType[] = await response.json()
    if (response.ok) {
      console.log(response.status)
      console.log(json)
      setRecipes(json)
    } else {
      console.log(response.status)
    }
  }, [])

  const getTarget = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const recipeData = [...recipes]
    const targetData = recipeData[Number(e.currentTarget.id)]
    setRecipes([targetData])
    setRecipeFlag(true)
  }, [])

  const onSubmitList = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setRecipeFlag(false)
    const oldData = [...tableData]
    const newData = {
      ...oldData[Number(pickDayId) - 1],
      recipe: recipes[0].recipeName,
      id: recipes[0].id,
    }
    const newDataSet = oldData.map((data) => (data.tableNo === Number(pickDayId) ? newData : data))
    setTableData(newDataSet)
    setRecipes([])
    setPickDayId('')
  }, [])

  const deleteRecipe = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const oldData = [...tableData]
    const newData = { ...oldData[Number(e.currentTarget.id)], recipe: '' }
    const newDatas = oldData.map((data, index) =>
      index === Number(e.currentTarget.id) ? newData : data,
    )
    setTableData(newDatas)
  }, [])

  const submitRecipeList = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
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
  }, [])

  const getRecipeList = useCallback(async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
      setListData(json)
    } else {
      console.log(response.status)
    }
  }, [])

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
    listData,
  }
}
