import { useState } from 'react'
import { daysType } from '@/types/tableTypes'

export const useDeleteRecipe = () => {
  const [tableData, setTableData] = useState<daysType[]>([])
  const deleteRecipe = (e: any) => {
    const oldData = [...tableData]
    const newData = { ...oldData[e.target.id], recipe: '' }
    const newDatas = oldData.map((data, index) => (index === Number(e.target.id) ? newData : data))
    setTableData(newDatas)
  }

  return { deleteRecipe, tableData, setTableData }
}
