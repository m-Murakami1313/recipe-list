import { memo } from 'react'

import { TABLE_DEFINE } from '../../../libs/tableData'
import { daysType } from '@/types/tableTypes'

interface Props {
  tableData: daysType[]
  deleteRecipe: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

// eslint-disable-next-line react/display-name
export const Table = memo(({ tableData, deleteRecipe }: Props) => {
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
            tableData.map((day: daysType, index: number) => (
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
})
