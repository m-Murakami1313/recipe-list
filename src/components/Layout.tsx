import { useSession, signIn, signOut } from 'next-auth/react'
import Head from 'next/head'
import Link from 'next/link'

interface Title {
  title: string
  children: any
}

export const Layout: React.FC<Title> = ({ children, title }) => {
  const { data: session, status } = useSession()
  const loading = status === 'loading'
  return (
    <div className=' '>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='drawer drawer-end'>
        <input id='my-drawer' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content'>
          <header>
            <div className='navbar flex items-center bg-orange-400 '>
              <div className='container mx-auto pl-3 lg:px-28'>
                <div className='flex-1'>
                  <button className='pointer font-semibold'>Home</button>
                </div>
                <div className='justify-end'>
                  <div>
                    <div className='hidden space-x-12 md:inline-block'>
                      <button className='btn'>a</button>
                      <button className='btn'>a</button>
                      {!session ? (
                        <>
                          <button className='btn btn-ghost ' onClick={() => signIn()}>
                            Sign in
                          </button>
                        </>
                      ) : (
                        <>
                          <button className='btn btn-ghost ' onClick={() => signOut()}>
                            Sign out
                          </button>
                        </>
                      )}
                    </div>
                    <label htmlFor='my-drawer' className='btn btn-ghost drawer-button md:hidden'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        className='inline-block h-5 w-5 stroke-current'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M4 6h16M4 12h16M4 18h16'
                        ></path>
                      </svg>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <main className='container mx-auto px-8 lg:px-28'>{children}</main>
        </div>
        <div className='drawer-side'>
          <label htmlFor='my-drawer' className='drawer-overlay'></label>
          <ul className='menu bg-base-100 text-base-content w-60 overflow-y-auto p-4'>
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
