"use client"

import React, { useState } from 'react'
import ContactCard from './ContactCard'
import { contacts } from '@/data'
import Image from 'next/image'
import { IMAGES } from '@/assets'
import Loader from '../Loader/Loader'
import { sendEmailFromContact } from '@/lib/serverActions'
import Link from 'next/link'

const CustomInput = ({ title, val, setval, type }: {
    val: string, title: string, type: string, setval: (item: string) => void
}) => {
    return <div>
        <div className='border border-black/20 rounded-2xl py-2 text-sm'>
            <div className='border-b-2 border-black/30 mx-4 flex text-lg flex-col'>
                <input className='outline-none bg-transparent py-1 rounded-xl' placeholder={title} type={type} onChange={(e) => setval(e.target.value)} value={val} />
            </div>
        </div>
    </div>
}

interface msgprops {
    message: string
    success: boolean
}

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [details, setDetails] = useState("");
    const [loading, setLoading] = useState(false);
    const [apiresp, setApiresp] = useState(false);
    const [respMsg, setRestMsg] = useState<msgprops>({ message: "", success: false });

    const handleSubmit = async () => {
        setLoading(true);
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if (regex.test(email)) {

            const resp = await sendEmailFromContact({ name, email, message: details })
            console.log("resp is : ", resp);
            setApiresp(true);
            if (resp.success) {
                setRestMsg({ message: "You response has bees recorded successfully!", success: true });
            } else {
                setRestMsg({ message: "Error! Please try again later.", success: false });
            }
            setName("");
            setEmail("");
            setDetails("");
            setLoading(false);
            setTimeout(() => {
                setApiresp(false);
                setRestMsg({ message: "", success: false });
            }, 4000);
        } else {
            setLoading(false);
            setApiresp(true);
            setRestMsg({ message: "Email not valid", success: false });
            setTimeout(() => {
                setApiresp(false);
                setRestMsg({ message: "", success: false });
            }, 3000);
        }
    }

    return (
        <div className='flex px-8 md:px-14 py-20 flex-1 flex-col w-full' id='contact'>

            <div className='flex flex-col gap-10 2xl:gap-14 w-full'>

                <div className='flex flex-col gap-8 2xl:gap-14 2xl:text-3xl items-center w-full'>
                    <p className='text-3xl 2xl:text-5xl font-bold text-primary-500'>Take the next step towards success</p>
                    <div className='flex'>
                        <p className='py-3 text-sm 2xl:text-2xl 2xl:px-16 2xl:py-6 px-10 rounded-lg bg-[#B6B5FF] cursor-pointer hover:bg-[#B6B5FF]/90 text-primary-500'><Link href={"#contact-form"} > Contact Us </Link></p>
                    </div>
                </div>
                <div className='flex gap-16 justify-center flex-col md:flex-row items-center'>
                    {contacts.map((item) => {
                        return <ContactCard key={item.idx} content={item.content} title={item.title} idx={item.idx} />
                    })}
                </div>
               
            </div>

            <div className='py-10 md:py-20 flex justify-center items-center flex-col md:flex-row flex-1'>

                <div className='px-10 py-10 contact-gradeint w-80 2xl:w-96 h-40 2xl:h-[36rem] md:h-[28rem] rounded-lg flex justify-center items-center '>
                    <div className='text-center flex flex-col gap-2 text-primary-500 text-2xl'>
                        <p className='font-bold'>
                            Let&apos;s Talk
                        </p>
                        <p className=''>
                            About Your Experience
                        </p>
                    </div>
                </div>

                <div id='contact-form' className='border border-black/10 goal-shadow rounded-lg px-10 py-8 my-8 md:-ml-10 bg-white h-96 2xl:h-[30rem] 2xl:w-[30rem] w-80 md:w-96'>
                    <div className='flex flex-col gap-4 2xl:gap-8'>
                        <CustomInput type='text' title={"Enter your name"} val={name} setval={setName} />
                        <CustomInput type='email' title={"Enter you email"} val={email} setval={setEmail} />
                        <div className='text-sm border-black/30 rounded-2xl border p-2'>
                            <textarea value={details} onChange={(e) => {
                                (details.length <= 300) && setDetails(e.target.value);
                                details.length == 300 && setDetails(details.slice(0, -1));
                            }} className='outline-none w-full ' placeholder='Message' rows={5} />
                            <div className='flex justify-end text-xs'>
                                <p>{details.length}/300</p>
                            </div>
                        </div>
                        {details.length == 300 &&
                            <div className='text-red-500 text-xs px-4'>Character limit excceded!</div>
                        }
                        <div className='flex justify-center'>
                            {loading && <Loader />}
                            {!loading &&
                                <p onClick={handleSubmit} className='px-10 py-3 text-sm rounded-lg cursor-pointer bg-[#B6B5FF] 2xl:text-2xl 2xl:px-14 2xl:py-4 hover:bg-[#B6B5FF]/90 text-[#496374]'>Submit</p>
                            }
                        </div>
                    </div>
                </div>
            </div>

            {apiresp &&
                <div className='py-4'>
                    <p className={`text-2xl text-center ${respMsg.success ? "text-green-600" : "text-red-500"}`}>{respMsg.message}</p>
                </div>
            }
        </div>
    )
}

export default Contact
