export const CreateRecipeProcessForm = ({
  addEmpty,
  deleteData,
  handleChangeData,
  submitProcessData,
  createRecipeDataSet,
}: any) => {
  console.log(createRecipeDataSet)
  return (
    <div>
      <div className='mt-20 flex items-center justify-start'>
        <label className='text-2xl'>工程</label>
        <button className='btn btn-ghost ml-5 bg-yellow-400 p-2' onClick={addEmpty}>
          工程追加ボタン
        </button>
      </div>
      <div>
        <form className='py-5' onSubmit={submitProcessData}>
          <div className='flex flex-wrap'>
            {createRecipeDataSet.map((data: any, index: number) => (
              <div key={index} className='mt-5 flex justify-center lg:ml-5'>
                <label
                  className='flex h-10 w-10 items-center justify-center rounded bg-gray-100 text-center'
                  htmlFor={index.toString()}
                >
                  {index + 1}
                </label>
                <textarea
                  id={index.toString()}
                  rows={4}
                  className='block w-72 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg text-gray-900 sm:w-96 '
                  placeholder='レシピを記入'
                  onChange={handleChangeData}
                  value={data.processName}
                ></textarea>
                <button
                  id={index.toString()}
                  onClick={deleteData}
                  className='btn btn-ghost bg-yellow-400 p-2'
                >
                  工程削除
                </button>
              </div>
            ))}
          </div>
          <div className='mt-10 flex items-center'>
            <label className='text-2xl'>レシピ登録</label>
            <button type='submit' className='btn btn-ghost ml-5 bg-yellow-400 p-2'>
              レシピ登録
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
