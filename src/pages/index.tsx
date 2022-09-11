import type { NextPage } from 'next'

import { Layout } from '@/components/Layout'
import { HomeHowToUse } from '@/components/UI/templates/HomeHowToUse'

const Home: NextPage = () => {
  return (
    <div>
      <Layout title='Home'>
        <div className='mt-20 text-center'>
          <HomeHowToUse />
        </div>
      </Layout>
    </div>
  )
}

export default Home
