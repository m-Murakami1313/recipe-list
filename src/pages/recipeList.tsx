import type { NextPage } from 'next'
import { Layout } from '@/components/Layout'

const recipeList: NextPage = () => {
  return (
    <div>
      <Layout title='Home'>
        <label
          htmlFor='number'
          className='flex h-10 w-10 items-center justify-center rounded bg-gray-100'
        >
          1
        </label>
      </Layout>
    </div>
  )
}

export default recipeList
