"use client"
import Link from 'next/link';
import React, { useState } from 'react'

const Navbar = () => {

  const [menu, setMenu] = useState(false);

  return (
    <div className='px-10 py-10 text-white'>
      <div className='flex justify-between'>
        <div className='flex items-center'>
          <div className={`px-4 py-2 flex sm:hidden`} >
            <label className="burger" htmlFor="burger">
              <input type="checkbox" id="burger" onClick={() => { setMenu(!menu) }} />
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          <p className='cursor-pointer 2xl:text-2xl'><Link href={"/"}> Wodpro league </Link></p>
        </div>
        <div className='gap-4 hidden md:flex'>
          <Link href={"/"}> <p className={`px-4 2xl:text-2xl 2xl:px-6 2xl:py-3 py-2 hover:bg-white hover:text-black cursor-pointer rounded-xl`}> About Us </p> </Link>
          <Link href={"#contact"}>  <p className='px-4 2xl:text-2xl 2xl:px-6 2xl:py-3 py-2 hover:bg-white hover:text-black cursor-pointer active:bg-white rounded-xl'> Contact Us </p> </Link>
        </div>
        {menu &&
          <div className='gap-4 flex flex-col absolute bg-primary-100 left-10 rounded-lg top-24 w-60 h-60 py-10 '>
            <Link href={"/"}> <p className='px-4 py-2 hover:bg-white hover:text-black cursor-pointer border-b border-white/20 active:bg-white rounded-lg mx-4'> About Us </p> </Link>
            <Link href={"/projects"}> <p className='px-4 py-2 hover:bg-white hover:text-black cursor-pointer border-b border-white/20 active:bg-white rounded-lg mx-4'> Our Projects </p> </Link>
            <Link href={"#contact"}> <p className='px-4 py-2 hover:bg-white hover:text-black cursor-pointer border-b border-white/20 active:bg-white rounded-lg mx-4'> Contact Us </p> </Link>
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar
