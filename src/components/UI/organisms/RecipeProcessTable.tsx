interface Props {
  tableData: {
    processNo: number
    processName: string
    id: string
  }[]
  tableHead: string[]
}

export const RecipeProcessTable = ({ tableData, tableHead }: Props) => {
  return (
    <div className='relative w-full overflow-x-auto shadow-md sm:rounded-lg lg:w-4/5'>
      <table className='w-full table-fixed text-gray-500'>
        <thead className='h-20 bg-gray-50 text-sm uppercase text-gray-700 md:text-lg'>
          <tr>
            {tableHead.map((data: string, index: number) => (
              <th key={index}>{data}</th>
            ))}
          </tr>
        </thead>
        <tbody className='break-words text-sm md:text-lg'>
          {tableData.map((data: { processNo: number; processName: string; id: string }) => (
            <tr key={data.id} className='h-10 border-b text-center'>
              <td>{data.processNo}</td>
              <td className="text-left">{data.processName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
