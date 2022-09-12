import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

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
    <Layout title='SearchRecipeList'>
      <div className='md:ml-20'>
        <SearchList />
      </div>
    </Layout>
  )
}

export default SearchRecipeList
