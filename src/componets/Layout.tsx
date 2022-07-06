import Head from 'next/head'
import Link from 'next/link'

interface Title {
  title: string
  children: React.ReactNode;
}

export const Layout: React.FC<Title> = ({ children, title }) => {
  return (
    <div className='flex justify-center' items-center>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>
        <nav className='w-screen bg-gray-800'>
          <div className='flex items-center'>
            <div className='flex space-x-4'>
              <Link href='/'>
                <a className='text-gray-300'>Home</a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}