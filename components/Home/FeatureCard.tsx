import Image from 'next/image'
import React from 'react'

const FeatureCard = ({ title, content, img, bg, index }: { index:number, title: string, content: string, img: string, bg:string }) => {
    return (
        <>
            <div className={`${index == 0 && "bg-[#B6B5FF]"} 
            ${index == 1 && "bg-[#B6B5FF]/80"}
             ${index == 2 && "bg-[#B6B5FF]/60"}
             ${index == 3 && "bg-[#7FB0C6]/40"} 
             ${index == 4 && "bg-[#7FB0C6]"} 
             ${index == 5 && "bg-[#7FB0C6]"} 
              px-8 pb-6 pt-14 rounded-lg  md:w-1/4`}>
                <div className='flex justify-center -mt-20 2xl:-mt-24'>
                    <Image src={img} width={50} height={50} alt='img' className='rounded-full 2xl:h-20 2xl:w-20' />
                </div>
                <div className='flex flex-col gap-4 pt-4 2xl:text-2xl'>
                    <p className='text-black text-center 2xl:font-medium'>{title}</p>
                    <p className='text-black/50'>{content} </p>
                </div>
            </div>
        </>
    )
}

export default FeatureCard
