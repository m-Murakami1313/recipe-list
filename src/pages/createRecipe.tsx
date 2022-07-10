import type { NextPage } from 'next'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Layout } from '@/components/Layout'

const CreateRecipe: NextPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmitPost = async (data: any) => {
    const submitData = { authorId: data.authorId, post: data.post }
    console.log(JSON.stringify(submitData))
    const response = await fetch('api/post', {
      method: 'POST',
      body: JSON.stringify(submitData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const json = await response.json()
    if (response.ok) {
      console.log(response.status)
      console.log(json)
      reset()
    } else {
      console.log(response.status)
    }
  }

  const onSubmitRecipeName = async (data: any) => {
    const response = await fetch('api/user', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const json = await response.json()
    if (response.ok) {
      console.log(response.status)
      console.log(json)
      reset()
    } else {
      console.log(response.status)
    }
  }

  return (
    <div>
      <Layout title='CreateRecipe'>
        <div className='md:ml-20'>
          <div className='mt-10'>
            <form onSubmit={handleSubmit(onSubmitRecipeName)}>
              <label htmlFor='name'>レシピ名</label>
              <input
                id='name'
                type='text'
                {...register('post')}
                className='mt-5 block w-96 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg text-gray-900 '
                placeholder='レシピ名を記入'
              />
            </form>
          </div>
          <div className='mt-10 pt-5'>
            <p>工程</p>
          </div>
          <div>
            <form onSubmit={handleSubmit(onSubmitPost)} className=''>
              <div className='flex py-5'>
                <label
                  htmlFor='number'
                  className='flex h-10 w-10 items-center justify-center rounded bg-gray-100'
                >
                  1
                </label>
                <textarea
                  id='number'
                  rows={4}
                  {...register('recipe')}
                  className='block w-96 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-lg text-gray-900 '
                  placeholder='レシピを記入'
                ></textarea>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default CreateRecipe
