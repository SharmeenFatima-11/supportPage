import React from 'react'

const ContactCard = ({title, content, idx}: {title:string, content:string, idx:number}) => {
  return (
    <div className={` border border-black/30 flex-1 hover:border-primary hover:border-2 hover:scale-110 hover:transform hover:ease-in-out hover:duration-700 cursor-default h-60 2xl:h-96 2xl:w-96 w-60 rounded-2xl `}>
        <div className={`py-10 text-center text-primary-500 px-4 flex flex-col gap-6 2xl:gap-10`}>
            <p className='font-bold 2xl:text-3xl'>{title}</p>
            <p className=' text-[#00000049] 2xl:text-2xl'>{content}</p>
        </div>
    </div>
  )
}

export default ContactCard
