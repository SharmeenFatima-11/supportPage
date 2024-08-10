"use client"
import Link from 'next/link';
import React from 'react'

const Footer = () => {

    return (
        <div className='bg-[#B6B5FF] px-14 py-10'>
            <div className='flex flex-col gap-14 justify-center items-center w-full'>
                <div className='text-primary-500/50 flex flex-col md:flex-row gap-4 flex-1 w-full'>
                    <div className='flex-[2] flex items-center'>
                        <p className='text-primary-500 2xl:text-2xl'>Copyright © 2024 Wodpro League</p>
                    </div>
                    <div className='flex-1 flex flex-col gap-1 2xl:gap-3'>
                        <p className='font-medium text-primary-500 py-2 2xl:text-3xl'>Support</p>
                        <p className='cursor-pointer 2xl:text-2xl'>About Us</p>
                        {/* <p className='cursor-pointer 2xl:text-2xl'> <Link href={"/PrivacyPolicy"}>Privacy Notice </Link></p>
                        <p className='cursor-pointer 2xl:text-2xl'><Link href="TermsOfServices">Terms of service </Link></p>
                    */}
                    </div>
                   
                </div>
               
            </div>
        </div>
    )
}

export default Footer
