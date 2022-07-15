import { useForm } from 'react-hook-form'

export const useCreateRecipe = () => {
  const { reset } = useForm()

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

  return { onSubmitPost, onSubmitRecipeName }
}
