import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Navigation } from '../organism/Navigation';

export default function Header(props: any) {
  const [openMenu, setOpenMenu] = useState(false);
  const data = props.menuList
  console.log(data)

  const menuFunction = () => {
    setOpenMenu(!openMenu);
  };

  return (
   <Navigation />
  )
}
