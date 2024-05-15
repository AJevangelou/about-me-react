import React from 'react'
import { navLinks } from '../constants/navLinks'
import { hamburger } from '../assets/icons'

const Navbar = () => {
  return (
    <React.Fragment>
        <header className=' padding-x py-8 absolute z-10 w-full'>
            <nav className='flex justify-end items-center max-container'>
                <ul className='flex-1 flex justify-end items-center gap-16 max-lg:hidden'>
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a href={item.href}
                        className='font-DM leading-normal text-lg text-white hover:text-red-400'>
                            {item.label}
                        </a>
                </li>
                ))}
                </ul>
                <div className='pr-5 hidden justify-end max-lg:block'>
                    <img className=' bg-white cursor-pointer' src={hamburger} alt='Hamburger' width={25} height={25}></img>
                </div>
            </nav>
        </header>
    </React.Fragment>
  )
}

export default Navbar