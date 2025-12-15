import React from 'react'
import { motion } from "motion/react";

const Motion = () => {
  return (
    <>
      <motion.div 
        animate={{
            x:[0, 1000, 1000, 0, 0],
            y: [0, 0, 200, 200, 0],
            rotate: [0, 360, 0, -360, 0]
        }}
        transition={{
            duration: 4,
        }}
      className='h-52 w-52 bg-amber-700 border-2'></motion.div>
      <motion.div 
        animate={{
            x:1000,
            
        }}
        whileHover={{
            backgroundColor:'white'
        }}
        whileTap={{
            scale:0.8
        }}
        drag
        dragDirectionLock='true'
      className='h-52 w-52 bg-green-300 rounded-[50%] border-2'>
        <motion.div className='h-5 w-5 rounded-[50%] bg-amber-950'>

        </motion.div>
      </motion.div>
    </>
  )
}

export default Motion
