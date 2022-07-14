import { PrismaClient } from '@prisma/client'
import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import { Layout } from '@/components/Layout'

// const prisma = new PrismaClient()

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('http://localhost:3000/api/recipe', {
    method: 'GET',
  })
  const json = await response.json()
  const recipeId = json.map((json: any) => ({ id: json.id }))
  console.log(recipeId)
  if (response.ok) {
    console.log(response.status)
    console.log(json)
  } else {
    console.log(response.status)
  }
  const paths = recipeId.map(({ id }: any) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: 'blocking',
  }

  // const userID = await prisma.user.findMany()
  // console.log(userID)
  // const paths = userID.map(({ id }) => ({ params: { id: id.toString() } }))
  // return {
  //   paths,
  //   fallback: 'blocking',
  // }
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  // params.id (現在のページのID) から データを取得.
  const response = await fetch(`http://localhost:3000/api/recipe/`, {
    method: 'GET',
  })
  const json = await response.json()
  const data = await json[params.id - 1]

  return {
    props: {
      data,
    },
    revalidate: 20,
    notFound: !data,
  }
}

export default function User({ data }: any) {
  console.log(data)
  return (
    <Layout title='recipe'>
      <div className=''>
        <h1>レシピ名 {data.name}</h1>
        <p>使用食材・調味料：{data.id}</p>
        <Link href={'/'}>
          <a>戻る</a>
        </Link>
      </div>
    </Layout>
  )
}
