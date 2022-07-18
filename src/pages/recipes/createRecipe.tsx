import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'

import { Layout } from '@/components/Layout'
import { CreateRecipeForm } from '@/components/UI/templates/CreateRecipeForm'

const CreateRecipe: NextPage = () => {
  return (
    <div>
      <Layout title='CreateRecipe'>
        <div className='md:ml-20'>
          <div className='mt-10 flex items-center justify-center'>
            <CreateRecipeForm />
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default CreateRecipe
