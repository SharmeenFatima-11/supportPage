import React from 'react'
import Link from 'next/link'
import { RiArrowRightSLine } from 'react-icons/ri'

const Hero = () => {
    return (
        <div className='flex justify-center items-center flex-1 text-white'>
            <div className='flex items-center flex-1 flex-col h-full'>
            <div className='font-bold text-xl justify-center items-center gap-2 flex flex-col sm:text-2xl md:text-3xl xl:text-4xl text-left flex-1'>
            <p className='ml-10 w-1/2 text-justify mb-4 leading-relaxed'>
    Join us for this exciting CrossFit event where you can compete against athletes from all over Spain. It&apos;s the first CrossTraining league, where you can compete from your own gym and be cheered on by your friends.
</p>

    {/* <p>Today - Innovate, Transform, Thrive!</p> */}
</div>

                <div className='flex-1 flex justify-center flex-col sm:flex-row gap-4 items-center'>
                    <Link href={"#contact"} > <p className='cursor-pointer rounded-lg px-8 py-4 text-xs 2xl:text-2xl 2xl:px-14 2xl:py-5 bg-primary-500 hover:bg-primary-500/90 text-white'> Contact us </p> </Link>
                    <Link href={"#aboutsection"} > <p className='cursor-pointer flex gap-1 items-center 2xl:text-2xl'> Explore About Us <RiArrowRightSLine size={30} color='white' /> </p> </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
