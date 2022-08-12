import { useRouter } from 'next/router'
import React from 'react'

import { TABLE_DEFINE_List } from '../../../libs/tableData'

interface Props{
  recipeId: string;
  tableNo: number;
  dayOfWeek: string;
  recipe: {
      recipeName: string;
  };
}

export const RecipeListTable = ({tableData}:any) => {
  const router = useRouter()

  return (
    <div className='relative w-full overflow-x-auto shadow-md sm:rounded-lg lg:w-2/3'>
      <table className='w-full text-gray-500'>
        <thead className='h-20 bg-gray-50 text-sm uppercase text-gray-700 md:text-lg'>
          <tr>
            {TABLE_DEFINE_List.map((def) => {
              if (def.key === 'dayOfWeek') {
                return (
                  <th className='w-1/3 px-6 py-3 text-center' key={def.key}>
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
            tableData.map((data: any) => (
              <tr key={data.dayOfWeek} className='h-10 border-b text-center'>
                <th>{data.dayOfWeek}</th>
                <td
                  className='hover:cursor-pointer hover:text-blue-800 hover:underline'
                  onClick={() => router.push(`../../recipes/${data.recipeId}`)}
                >
                  {data.recipe.recipeName}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
