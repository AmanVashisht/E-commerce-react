import React from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function Login() {
    const name = useRef()
    const email = useRef()
    const password = useRef()

    let lname = localStorage.getItem("name");
    let lemail = localStorage.getItem("email");
    let lpassword = localStorage.getItem("password");

    const navigate =useNavigate()

    function valid() {
        
        if(lname==name.current.value&&lemail==email.current.value&&lpassword==password.current.value)
        {
            Swal.fire(
                'Login Successfully!',
                'You clicked the button!',
                'success'
              );
              navigate("/home")
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
              })
        }
    }
  return (
    <div className='bg-gradient-to-r from-cyan-600 to-blue-600 w-[100vw] h-[100vh] '>
        .
        <div className='bg-[#c9c8c870] shadow-lg shadow-grey-500/40 w-[80vw] h-[80vh] my-[2.5%] mx-[10%] rounded-[20px] flex justify-between '>
            <div className='relative'>
                <img src="https://assets-global.website-files.com/614716f50b4f49202fdd0087/6169492e08e5884ebb363747_6356.png" className='w-[40vw] h-[100%] rounded-tl-[20px] rounded-bl-[20px]' alt="pic" />
                <Link to="/signup">
                    <button className='rounded-lg py-2 px-24 font-bold text-blue-800 bg-white absolute top-20 left-[135px]'>Sign up</button>
                </Link>
                
            </div>
            <div className='flex flex-col px-24 py-10'>
                <h1 className='font-bold text-5xl text-white text-center mb-8'>Login</h1>
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
                <button onClick={valid} className='rounded-lg py-2 bg-blue-800 text-white'>Login</button>
            </div>
            
        </div>
    </div>
  )
}

export default Login
