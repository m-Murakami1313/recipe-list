import Head from 'next/head'
import Link from 'next/link'
import Header from './UI/template/Header'

interface Title {
  title: string
  children: React.ReactNode
}

export const Layout: React.FC<Title> = ({ children, title }) => {
  const menuList = [
    { name: 'about', link: '#about' },
    {
      name: 'skills',
      link: '#skills',
    },
    {
      name: 'values',
      link: '#values',
    },
    {
      name: 'future',
      link: '#future',
    },
  ];
  return (
    <div className='flex justify-center' items-center>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header menuList={menuList}></Header>
      <main>{children}</main>
    </div>
  )
}
