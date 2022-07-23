import { GetStaticPaths, GetStaticProps } from 'next'
import prisma from '../../libs/prisma'

import { Layout } from '@/components/Layout'
import { RecipePage } from '@/components/UI/templates/RecipePage'

// const prisma = new PrismaClient()

export const getStaticPaths: GetStaticPaths = async () => {
  const recipes = await prisma.recipe.findMany()
  const paths = recipes.map((recipe: any) => ({ params: { id: recipe.id } }))
  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  // params.id (現在のページのID) から データを取得.
  const data = await prisma.recipe.findUnique({
    where: { id: params.id },
    select: {
      recipeName: true,
      id: true,
      url: true,
      process: {
        select: {
          processNo: true,
          processName: true,
          id: true,
        },
      },
      ingredients: {
        select: {
          ingredientsName: true,
          weight: true,
          id: true,
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
  const { recipeName, id, process, ingredients, url } = data
  return (
    <Layout title='recipe'>
      <div className='md:ml-20'>
        <div className='mt-10'>
          <RecipePage
            recipeName={recipeName}
            process={process}
            ingredients={ingredients}
            url={url}
          />
        </div>
      </div>
    </Layout>
  )
}
