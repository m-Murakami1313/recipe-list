import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import Home from '..'
import { Layout } from '@/components/Layout'
import { SearchList } from '@/components/UI/templates/SearchList'

const SearchRecipeList: NextPage = () => {
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
      <SearchList />
    </Layout>
  )
}

export default SearchRecipeList
