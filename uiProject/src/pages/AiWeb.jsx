import React from 'react'
import AiNav from '../components/AiNav'

const AiWeb = () => {
  return (
    <>
    <div className=' w-full min-h-screen relative overflow-hidden bg-gray-600'>
      <video autoPlay muted loop playsInline 
      className=' absolute object-cover top-0 left-0 w-full h-full'
      src="https://community.s3.openwebui.com/landing.mp4" alt="" />
      <div className=' absolute inset-0 bg-black/50'></div>
      <div className=' absolute pt-60 pl-15'>
        <p className=' text-gray-300 '>Open WebUI</p>
        <h1 className='text-7xl text-white pt-4'>The freedom AI stack.</h1>
        <h3 className=' text-gray-300 text-2xl pt-6'>Run AI on your own terms. Connect any model, extend with code,<br /> protect what matters—without compromise.</h3>
      </div>
      
    <div className='relative'>
        <AiNav/>
    </div>
    </div>
    </>
  )
}

export default AiWeb
