import React from 'react'
import headerlogo from '../assets/images/header-logo.svg'
import hamburger from '../assets/icons/hamburger.svg'
import navlinks from '../constants/index'
const Nav = () => {
  return (
    <header className='padding-x padding-y-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
       <img src={headerlogo} alt="headerlogo" width={130} height={29}/>
       
        </a>
        
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
        
        </ul>
      </nav>
    </header>
  )
}

export default Nav