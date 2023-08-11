import React from 'react'
import { motion } from 'framer-motion'

function Box3(props) {
    const boxvarient = {
        hidden: {
            x: -2000,
        },
        visible: {
            x: 0,
            transition:{
                delay: 0.5,
                when: "beforeChildren" 
            }
            
        }
    }

    const listvarient = {
        hidden: {
            x: -10,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition:{
                delay: 0.8,
                staggerChildren: 0.2
            }
        }
    }
  return (
    <div className='m-5'>
        <motion.div 
            className='w-[20rem] h-[20rem] bg-gradient-to-b from-[#355af3] to-[#1a0e74] flex flex-col justify-center'
            whileHover={{
                scale: 1.1
            }}
            variants={boxvarient}
            animate="visible"
            initial="hidden"
            >
               <motion.li 
                        className='list-none bg-white w-[93%] h-[80%] p-[1rem] m-3'
                        variants={listvarient}
                        >
                            <img src={props.src} className='h-[200px] w-[100%]' alt="pic" />
                            <h1 className='font-bold text-black text-2xl text-center'>{props.pname}</h1>
                </motion.li> 
        </motion.div>
    </div>
  )
}

export default Box3

