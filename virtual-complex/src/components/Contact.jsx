import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useRef } from 'react'
import Swal from 'sweetalert2'

function Contact() {
    const name = useRef()
    const email = useRef()
    const message = useRef()

    function submitvalue() {

            localStorage.setItem("contact-name",name.current.value);
            localStorage.setItem("contact-email",email.current.value);
            localStorage.setItem("contact-message",message.current.value);

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your message has been saved',
                showConfirmButton: false,
                timer: 1500
              })
        
    }
  return (
    <>
    <Navbar/>
    <div className='min-h-[18.4vh]'>
        <div className='flex'>
            <div className='px-16 py-6 w-[100vw] bg-gradient-to-b from-[#355af3] to-[#1a0e74] mx-20 my-10 border-2 border-black'>
                <h1 className='font-extrabold text-center text-white text-2xl pb-4'>Contact US</h1>
                <div className='flex flex-col'>
                    <label htmlFor="name" className='text-gray-200' >Name: </label>
                    <input type="text" className='rounded-md border-2 p-1 my-1' placeholder='enter your name here' id="name" ref={name}/>
                    <label htmlFor="mail" className='text-gray-200' >Email address: </label>
                    <input type="text" className='rounded-md border-2 p-1 my-1' placeholder='enter your email here' id="mail" ref={email}/>
                    <label htmlFor="msg" className='text-gray-200' >Message: </label>
                    <textarea name="" id="msg" className='rounded-md border-2 p-1 my-1' cols="30" rows="3" placeholder='enter the message here' ref={message}/>
                </div>
                <button onClick={submitvalue} className='rounded-lg pt-1 pb-2 px-20 text-white text-center mx-[25%] mt-[5%] bg-[#355af3] text-xl font-bold'>Submit</button>
            </div>
            <div className='w-[100vw] h-[80vh]'>
                <img className='h-[80vh]' src="https://i.pinimg.com/736x/0c/64/bf/0c64bfb7420b5bd00b678b2a9bc1e5a2.jpg" alt="contact pic" />
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact
