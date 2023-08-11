import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function Pofile() {
    const navigate =useNavigate()

    let lname = localStorage.getItem("name");
    let lemail = localStorage.getItem("email");
    let lpassword = localStorage.getItem("password");

    function logout() {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't to log out!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Log out!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Log Out!',
                'You are log out .',
                'success'
              )
            navigate("/")
            }
          })
       
    }
  return (
    <div>
      <Navbar/>
            <div className='min-h-[18.4vh] flex w-[100vw]  justify-between'>
                <div className='p-5 p-8 border-black border-4 bg-gradient-to-b from-[#355af3] to-[#1a0e74] rounded-lg w-[44%] m-10'>
                    <div className='text-2xl text-white font-semibold px-10 pb-10'>
                        <h2 className='py-2'>User Name : {lname}</h2>
                        <h2 className='py-2'>User Email : {lemail}</h2>
                        <h2 className='py-2'>User Password : {lpassword}</h2>
                    </div>
                    <div className='text-center'>
                        <button onClick={logout} className='rounded-lg pt-1 pb-2 px-10 whitespace-nowrap text-white text-center mx-[40px] mt-[5%] bg-[#355af3] text-xl font-bold'>Log Out</button>
                    </div>
                </div>
                <div>
                    <img className='w-[50vw] h-[400px]' src="https://academy.avast.com/hubfs/New_Avast_Academy/How_to_Check_Your_Graphics_Card_and_Drivers_on_Windows_PC_Academy/Academy-How-to-check-your-graphics-card-and-drivers-on-Windows-PC-Thumb.jpg" alt="" />
                </div>
            </div>
      <Footer/>
    </div>
  )
}

export default Pofile
