import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";



const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl font-bold'>Contact Me</h2>
                <p className='text-gray-600 text-[18px] pt-2'>
                    Feel free to reach out for collaborations and opportunities. Drop me a line, or send me a message by submitting the form.
                </p>
                <div className='flex gap-3 items-center  text-base sm:text-lg'>
                    <AiOutlineMail size={30} /> sadiaroman28@gmail.com
                </div>
                <div className='flex gap-3 items-center text-sm sm:text-base'>
                    <AiFillLinkedin size={30} /> https://www.linkedin.com/in/roman-sadia-6b280a2b6
                </div>
            </div>
            <div className='space-y-8'>
                <div className='w-full md:w-1/2 px-10 py-2 flex flex-col gap-1'>
                    <label htmlFor="name">Name</label>
                    <input type="text"
                    className='h-[40px] bg-transparent border border-orange-400'
                    id='name'/>
                </div>
                <div className=' w-full md:w-1/2 px-10 py-2 flex flex-col gap-1'>
                    <label htmlFor="email">Email</label>
                    <input type="text"
                    className='h-[40px] bg-transparent border border-orange-400'
                    id='email'/>
                </div>
                <div className=' w-full md:w-1/2 px-10 py-2 flex flex-col gap-1'>
                    <label htmlFor="msg">Message</label>
                    <textarea 
                    className='bg-transparent border border-orange-400'
                    id='msg' rows={8}>
                    </textarea>
                </div>
                <button className='bg-orange-400 hover:bg-orange-600 p-2 px-6 ml-10'>Send</button>
            </div>
        </div>
    </div>
  )
}

export default Contact
