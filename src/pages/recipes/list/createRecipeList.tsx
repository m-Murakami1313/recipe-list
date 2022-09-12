import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

import { Layout } from '@/components/Layout'
import { CreateRecipeListPage } from '@/components/UI/templates/CreateRecipeListPage'
import Home from '@/pages'

const CreateRecipeList: NextPage = () => {
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
    <div>
      <Layout title='CreateRecipeList'>
        <CreateRecipeListPage />
      </Layout>
    </div>
  )
}

export default CreateRecipeList
