import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

import Home from '..'
import { Layout } from '@/components/Layout'
import { SearchRecipes } from '@/components/UI/templates/SearchRecipes'

const SearchRecipe: NextPage = () => {
  const router = useRouter()
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/')
      alert('ログインしてください')
    },
  })

  if (status === 'loading') {
    return <Home />
  }
  
  return (
    <Layout title='searchRecipe'>
      <SearchRecipes />
    </Layout>
  )
}

export default SearchRecipe
