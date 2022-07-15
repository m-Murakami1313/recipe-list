import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Layout } from '@/components/Layout'
import { CreateRecipeForm } from '@/components/UI/templates/CreateRecipeForm'
import { useCreateRecipe } from '@/hooks/useCreateRecipe'

const CreateRecipe: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <div>
      <Layout title='CreateRecipe'>
        <div className='md:ml-20'>
          <div className='mt-10 flex items-center justify-center'>
            <CreateRecipeForm register={register} handleSubmit={handleSubmit} />
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default CreateRecipe
