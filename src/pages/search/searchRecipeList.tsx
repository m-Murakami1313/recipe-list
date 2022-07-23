import type { NextPage } from 'next'

import { Layout } from '@/components/Layout'
import { SearchList } from '@/components/UI/templates/SearchList'

const SearchRecipeList: NextPage = () => {
  return (
    <Layout title='searchRecipe'>
      <SearchList />
    </Layout>
  )
}

export default SearchRecipeList
