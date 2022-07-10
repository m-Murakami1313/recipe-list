import type { NextPage } from 'next'
import { Layout } from '@/components/Layout'

const Home: NextPage = () => {
  return (
    <div>
      <Layout title='Home'>
        <div className='mt-20 text-center'>
          <h1 className='py-16 text-3xl lg:text-4xl'>夜ごはんのメニューを簡単に決めませんか？</h1>
          <h2 className='py-16 text-2xl lg:text-3xl'>使い方</h2>
        </div>
      </Layout>
    </div>
  )
}

export default Home
