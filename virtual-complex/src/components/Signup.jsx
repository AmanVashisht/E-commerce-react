import React from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function Signup() {

    const name = useRef()
    const email = useRef()
    const password = useRef()

    const navigate =useNavigate()

    function register() {
        navigate("/home")
        if(name.current.value&&email.current.value&&password.current.value)
        {
            localStorage.setItem("name",name.current.value);
            localStorage.setItem("email",email.current.value);
            localStorage.setItem("password",password.current.value);

            Swal.fire(
                'Signup Successfully!',
                'You clicked the button!',
                'success'
              );
        }
    }
  return (
    <div className='bg-gradient-to-r from-cyan-600 to-blue-600 w-[100vw] h-[100vh] '>
        .
        <div className='bg-[#c9c8c870] shadow-lg shadow-grey-500/40 w-[80vw] h-[80vh] my-[2.5%] mx-[10%] rounded-[20px] flex justify-between '>
            
            <div className='flex flex-col px-24 py-10'>
                <h1 className='font-bold text-5xl text-white text-center mb-8'>SIGN UP</h1>
                <label htmlFor="name" className='text-gray-200'>Name: </label>
                <input type="text" className='rounded-md border-2 p-1 my-1' placeholder='enter your name here' id="name" ref={name}/>
                <label htmlFor="mail" className='text-gray-200'>Email address: </label>
                <input type="text" className='rounded-md border-2 p-1 my-1' placeholder='enter your email here' id="mail" ref={email}/>
                <label htmlFor="pass" className='text-gray-200'>Password: </label>
                <input type="text" className='rounded-md border-2 p-1 my-1' placeholder='enter strong password' id="pass" ref={password}/>
                <div className='my-4 '>
                    <div className='flex flex-row flex-nowrap gap-16'>
                        <div>
                            <input type="checkbox" className='mr-1' id="check1"/>
                            <label htmlFor="check1">Remember me</label>
                        </div>
                        <p className='text-blue-800 font-bold'>Forgot password?</p>
                    </div>
                </div>
                <button onClick={register} className='rounded-lg py-2 bg-blue-800 text-white'>Signup</button>
            </div>
            <div className='relative'>
                <img src="https://assets-global.website-files.com/614716f50b4f49202fdd0087/6169492e08e5884ebb363747_6356.png" className='w-[40vw] h-[100%] rounded-tr-[20px] rounded-br-[20px]' alt="pic" />
                <Link to="/">
                    <button className='rounded-lg py-2 px-24 font-bold text-blue-800 bg-white absolute top-20 left-[145px]'>Login</button>
                </Link>
                
            </div>
        </div>
    </div>
  )
}

export default Signup
