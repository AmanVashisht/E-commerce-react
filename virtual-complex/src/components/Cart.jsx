import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function Cart() {
  return (
    <>
    <Navbar/>
    <div className='min-h-[18.4vh]'>
        <div className='w-[100vw]'>
            <img className='w-[100vw] h-[50vh]' src="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60108244cbc250c4c1fa280b_6002086f72b72757ee01d959_blog-image.jpeg" alt="pic" />
        </div>
        <div className='p-10 bg-[#f0f0f0] w-[100vw]'>
            <h1 className='font-extrabold text-2xl pb-8'>Shopping Cart</h1>
            <div className='flex gap-4 justify-between'>
                <div className='bg-white p-10 border-2 w-[70vw] border-gray-300 rounded-md'>No Product</div>
                <div className='bg-white border-2 border-gray-300 rounded-md p-4'>
                    <div>
                        <p className='py-2'>Have a coupon?</p>
                        <div>
                            <input type="text" className='border-[1px] p-1 border-gray-300 rounded-tl-md rounded-bl-md' placeholder='Coupon code'/>
                            <button className='bg-[#3167EB] p-1 rounded-tr-md rounded-br-md text-white'>Apply</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Cart
