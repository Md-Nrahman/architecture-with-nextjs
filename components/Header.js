import React from 'react'
import Logo from '../assets/logo.png'

const Header = () => {
  return (
    <div className='w-full h-16'>
        <div className='flex justify-between items-center h-full py-7 px-16'>
            <h1 className='text-4xl font-medium'>
                <img src={Logo.src} alt='logo' className='h-20'/>
            </h1>
            <div>
                <ul className='flex text-base font-extralight gap-6 mr-16'>
                    <li className='mx-2'>Home</li>
                    <li className='mx-2'>About</li>
                    <li className='mx-2'>Contact</li>
                </ul>
            </div>
            </div>
    </div>
  )
}

export default Header