import React from 'react'

function Footer() {
  return (
    <div className='bg-[#1a0e74] text-white w-[100vw] py-16 px-28 sticky top-[100%]'>
        <div className='flex justify-around gap-16 pb-10'>
            <div>
            <h1 className='text-white font-bold text-4xl pb-2 pt-16'>Virtual Complex</h1>
            <div className='flex gap-10 py-10 px-3'>
                <i className="fa-brands fa-youtube text-blue-400"></i>
                <i className="fa-brands fa-facebook text-blue-400"></i>
                <i className="fa-brands fa-linkedin text-blue-400"></i>
                <i className="fa-brands fa-twitter text-blue-400"></i>
                <i className="fa-brands fa-instagram text-blue-400"></i>
            </div>
            </div>
            <div className='w-[320px]'>
                <h1 className='font-bold text-2xl py-4'>About Us</h1>
                <p>Step into a world of boundless shopping possibilities with our virtual complex ecommerce website, where every click opens the door to a multitude of products and experiences, all from the comfort of your screen.</p>
            </div>
            <div>
                <h1 className='font-bold text-2xl py-4'>Contact US</h1>
                <div className='flex gap-3 py-1'><i className="fa-solid fa-phone"></i><span>+91 9034619319</span></div>
                <div className='flex gap-3 py-1'><i className="fa-solid fa-envelope"></i><span>amanvashisht124@gmail.com</span></div>
                <div className='flex gap-3 py-1'><i className="fa-solid fa-location-dot"></i><span>88,Virat Nagar, Panipat</span></div>
                <div className='flex gap-3 py-1'><i className="fa-regular fa-calendar-days"></i><span>Mon-Fri: 9:00 to 6:00</span></div>
            </div>
            <div></div>
        </div>
        <p className='text-center pt-6 border-t-2 border-slate-200'>Copyright <i className="fa-regular fa-copyright"></i> 2023 All rights reserved.</p>
    </div>
  )
}

export default Footer
