import React, { useEffect, useState } from 'react'

interface days {
  day: string
  recipe?: string
  id: number
  tableId: number
}

export const Table = () => {
  const [tableData, setTableData] = useState<days[]>([])
  useEffect(() => {
    setTableData(dayOfWeek)
  }, [])

  const TABLE_DEFINE = [
    { label: '曜日', key: 'dayOfWeek' },
    { label: 'レシピ名', key: 'recipeName' },
    { label: 'テーブルから削除', key: 'deleate' },
  ]

  const deleteRecipe = (e: any) => {
    const oldData = [...tableData]
    const newData = { ...oldData[e.target.id], recipe: '' }
    const newDatas = oldData.map((data, index) => (index === Number(e.target.id) ? newData : data))
    setTableData(newDatas)
  }

  const dayOfWeek: days[] = [
    { day: '月', recipe: 'a', tableId: 1, id: 1 },
    { day: '火', recipe: 'b', tableId: 2, id: 2 },
    { day: '水', recipe: 'c', tableId: 3, id: 3 },
    { day: '木', recipe: 'e', tableId: 4, id: 4 },
    { day: '金', recipe: 'd', tableId: 5, id: 5 },
    { day: '土', recipe: 'e', tableId: 6, id: 6 },
    { day: '日', recipe: 'f', tableId: 7, id: 7 },
  ]

  return (
    <div className='relative w-full overflow-x-auto shadow-md sm:rounded-lg lg:w-4/5'>
      <table className='w-full text-gray-500'>
        <thead className='h-20 bg-gray-50 text-sm uppercase text-gray-700 md:text-lg'>
          <tr>
            {TABLE_DEFINE.map((def) => {
              if (def.key === 'dayOfWeek') {
                return (
                  <th className='w-1/6 px-6 py-3 text-center' key={def.key}>
                    {def.label}
                  </th>
                )
              }
              return (
                <th className='px-6 py-3' key={def.key}>
                  {def.label}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody className='text-sm md:text-lg'>
          {tableData &&
            tableData.map((day: any, index) => (
              <tr key={day.day} className='h-10 border-b text-center'>
                <th>{day.day}</th>
                <td>{day.recipe}</td>
                <td className='text-center'>
                  <button id={index.toString()} onClick={deleteRecipe}>
                    削除
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
