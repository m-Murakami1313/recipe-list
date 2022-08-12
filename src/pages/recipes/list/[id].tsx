import { ParsedUrlQuery } from 'node:querystring'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import prisma, { List } from '../../../libs/prisma'

import { Layout } from '@/components/Layout'
import { RecipeListPage } from '@/components/UI/templates/RecipeListPage'
import Home from '@/pages'

export const getStaticPaths: GetStaticPaths = async () => {
  const listData = await prisma.list.findMany()
  const paths = listData.map((list: List) => ({ params: { id: list.id } }))
  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await prisma.list.findUnique({
    where: { id: params?.id as string },
    select: {
      listName: true,
      id: true,
      list_recipe: {
        select: {
          recipeId: true,
          tableNo: true,
          dayOfWeek: true,
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

interface Data {
  data: {
    listName: string
    id: string
    list_recipe: {
      recipeId: string
      tableNo: number
      dayOfWeek: string
      recipe: {
        recipeName: string
      }
    }[]
  }
}

export default function User({ data }: Data) {
  const { listName, list_recipe } = data
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
    <Layout title='recipe'>
      <div className='md:ml-20'>
        <div className='mt-10'>
          <RecipeListPage listName={listName} list_recipe={list_recipe} />
        </div>
      </div>
    </Layout>
  )
}
