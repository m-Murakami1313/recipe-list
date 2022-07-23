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

  const pages = [
    { name: 'レシピ作成', href: 'recipes/createRecipe' },
    { name: 'レシピリスト作成', href: 'recipes/list/createRecipeList' },
    { name: 'レシピ検索', href: 'search/searchRecipe' },
    { name: 'レシピリスト検索', href: 'search/searchRecipeList' },
  ]

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
              <div className='container mx-auto pl-3 lg:px-16 2xl:px-28'>
                <div className='flex-1'>
                  <Link href={'/'}>
                    <a>
                      <button className='font-normal'>Home</button>
                    </a>
                  </Link>
                </div>
                <div className='justify-end'>
                  <div>
                    <div className='hidden space-x-3 md:inline-block'>
                      {pages.map((page) => (
                        <div key={page.name} className='hidden md:inline-block'>
                          <Link href={{ pathname: `/${page.href}` }}>
                            <a>
                              <button className='btn btn-ghost font-normal'>{page.name}</button>
                            </a>
                          </Link>
                        </div>
                      ))}
                      {!session ? (
                        <button className='btn btn-ghost font-normal' onClick={() => signIn()}>
                          サインイン・新規登録
                        </button>
                      ) : (
                        <button className='btn btn-ghost font-normal' onClick={() => signOut()}>
                          サインアウト
                        </button>
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
          <main className='container mx-auto px-8 lg:px-16 2xl:px-28'>{children}</main>
        </div>
        <div className='drawer-side'>
          <label htmlFor='my-drawer' className='drawer-overlay'></label>
          <aside className='w-64' aria-label='Sidebar'>
            <div className='m-1 overflow-y-auto rounded-md bg-gray-50 py-4 px-3 '>
              <ul className='space-y-2'>
                {pages.map((page) => (
                  <div key={page.name}>
                    <Link href={{ pathname: `/${page.href}` }}>
                      <li className='btn btn-ghost flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 '>
                        <a>{page.name}</a>
                      </li>
                    </Link>
                  </div>
                ))}
                {!session ? (
                  <li
                    className='btn btn-ghost flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100  '
                    onClick={() => signIn()}
                  >
                    サインイン・新規登録
                  </li>
                ) : (
                  <li
                    className='btn btn-ghost flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 '
                    onClick={() => signOut()}
                  >
                    サインアウト
                  </li>
                )}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
