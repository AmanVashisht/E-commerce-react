import React from 'react'
import { useState, useEffect } from 'react'
import { memo } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


function Mobile() {

    const [data, setData] = useState([])
    useEffect (()=>{
        fetch("https://fakestoreapi.com/products")
        .then((d)=>d.json()).then((res)=>{setData(res)})
    },[])

  return (
    <div className='bg-gray-200'>
       <Navbar/>
        <div className='min-h-[100vh] flex flex-row gap-5 w-[100vw] p-10  flex-wrap justify-around'>
            {data.map((item)=>{
                return (<div className='w-[320px] h-[400px] bg-white border-2 rounded-lg border-black gap-5 px-5 py-6' key={item.id} >
                    <img className='w-[320px] h-48' src={item.image} alt="" />
                    <p className='w-[100%] h-[20%] mt-3 overflow-hidden'>{item.description}</p>
                    <div className='flex flex-row '>
                        <h2 className='text-2xl font-bold'>$ {item.price}</h2>
                        <span className='text-green-600 py-2 text-sm px-2'>Upto 20% off</span>
                    </div>
                    <button className='bg-[#355AF3] w-[100%] px-5 py-2 text-white rounded-md'>Add to Cart</button> 
                </div>)
            })}
        </div>
       <Footer/>
    </div>
  )
}

export default memo(Mobile)
