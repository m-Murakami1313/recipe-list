import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React from 'react'

import Home from '..'
import { Layout } from '@/components/Layout'
import { CreateRecipeForm } from '@/components/UI/templates/CreateRecipeForm'

const CreateRecipe: NextPage = () => {
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
      <Layout title='CreateRecipe'>
        <div className='md:ml-20'>
          <div className='mt-10 flex'>
            <CreateRecipeForm />
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default CreateRecipe
