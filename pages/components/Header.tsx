import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '@/public/Logo.png'
import LinkBtn from './LinkBtn'

const Header = () => {
  return (
    <header className='header'>
      <Image src={Logo} alt='logo-cvico' width={60} height={60} />
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/">User Persona</Link></li>
        <li><Link href="/">My Cvico</Link></li>
        <li><Link href="/">Plans</Link></li>
      </ul>
      {/* <button className='custom-btn'>Login</button> */}
      <LinkBtn title={"Login"} url='/' />
    </header>
  )
}

export default Header
