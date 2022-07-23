import type { NextPage } from 'next'

import { Layout } from '@/components/Layout'
import { SearchRecipes } from '@/components/UI/templates/SearchRecipes'

const SearchRecipe: NextPage = () => {
  return (
    <Layout title='searchRecipe'>
      <SearchRecipes />
    </Layout>
  )
}

export default SearchRecipe
