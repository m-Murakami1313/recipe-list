import { GetStaticPaths, GetStaticProps } from 'next'
import { useSession } from 'next-auth/react'
import { useRouter } from "next/router";
import prisma from '../../../libs/prisma'

import { Layout } from '@/components/Layout'
import { RecipeListPage } from '@/components/UI/templates/RecipeListPage'
import Home from '@/pages';


export const getStaticPaths: GetStaticPaths = async () => {
  const listData = await prisma.list.findMany()
  const paths = listData.map((list: any) => ({ params: { id: list.id } }))
  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {

  const data = await prisma.list.findUnique({
    where: { id: params.id },
    select: {
      listName: true,
      id: true,
      list_recipe: {
        select: {
          recipeId: true,
          tableNo: true,
          dayOfWeek:true,
          recipe: {
            select: {
              recipeName: true,
            },
          },
        },
      },
    },
  })
  return {
    props: {
      data,
    },
    revalidate: 20,
    notFound: !data,
  }
}

export default function User({ data }: any) {
  const router = useRouter();
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
    <Layout title='recipe'>
      <div className='md:ml-20'>
        <div className='mt-10'>
          <RecipeListPage data={data}/>
        </div>
      </div>
    </Layout>
  )
}
