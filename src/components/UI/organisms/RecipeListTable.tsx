import React from 'react'
import { TABLE_DEFINE_List } from '../../../libs/tableData'

export const RecipeListTable = ({ tableData }: any) => {
  return (
    <div className='relative w-full overflow-x-auto shadow-md sm:rounded-lg lg:w-4/5'>
      <table className='w-full text-gray-500'>
        <thead className='h-20 bg-gray-50 text-sm uppercase text-gray-700 md:text-lg'>
          <tr>
            {TABLE_DEFINE_List.map((def) => {
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
            tableData.map((day: any, index: any) => (
              <tr key={day.day} className='h-10 border-b text-center'>
                <th>{day.day}</th>
                <td>{day.recipe}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
