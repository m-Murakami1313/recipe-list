import type { NextPage } from 'next'
import { Layout } from '@/components/Layout'

import { CreateRecipeList } from '@/components/UI/templates/CreateRecipeList'

const RecipeList: NextPage = () => {
  return (
    <div>
      <Layout title='Home'>
        <CreateRecipeList />
      </Layout>
    </div>
  )
}

export default RecipeList
