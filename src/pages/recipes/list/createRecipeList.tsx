import type { NextPage } from 'next'
import { Layout } from '@/components/Layout'

import { CreateRecipeListPage } from '@/components/UI/templates/CreateRecipeListPage'

const createRecipeList: NextPage = () => {
  return (
    <div>
      <Layout title='Home'>
        <CreateRecipeListPage />
      </Layout>
    </div>
  )
}

export default createRecipeList
