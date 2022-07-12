import React from 'react'

export const Table = () => {
  const TABLE_DEFINE = [
    { label: '曜日', key: 'dayOfWeek' },
    { label: 'レシピ名', key: 'recipeName' },
    { label: 'テーブルから削除', key: 'deleate' },
  ]

  const dayOfWeek = [
    { day: '月', recipe: 'a' },
    { day: '火', recipe: 'b' },
    { day: '水', recipe: 'c' },
    { day: '木', recipe: 'e' },
    { day: '金', recipe: 'd' },
    { day: '土', recipe: 'e' },
    { day: '日', recipe: 'f' },
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
          {dayOfWeek.map((day: any) => (
            <tr key={day.day} className='h-10 border-b text-center'>
              <th>{day.day}</th>
              <td>{day.recipe}</td>
              <td className='text-center'>
                <button>削除</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
