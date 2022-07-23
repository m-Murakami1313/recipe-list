import { PrismaClient } from '@prisma/client'
import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import prisma from '../../../libs/prisma'
import { Layout } from '@/components/Layout'
import { RecipeListPage } from '@/components/UI/templates/RecipeListPage'
import { initialDataList } from '@/libs/tableData'

// const prisma = new PrismaClient()

export const getStaticPaths: GetStaticPaths = async () => {
  const listData = await prisma.list.findMany()
  const paths = listData.map((list: any) => ({ params: { id: list.id } }))
  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  // params.id (現在のページのID) から データを取得.
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
