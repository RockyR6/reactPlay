import React, { useEffect, useState } from 'react'

const AiNav = () => {

  const [scroll, setScroll] = useState(false)

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)

  }, [])

  return (
    <div className={`fixed top-0 z-50 flex justify-between w-full text-white p-3 transition-all duration-300
      ${scroll ? 'bg-black shadow-lg' : 'bg-transparent'}
    `}>

      <img
        className='h-8 w-8 cursor-pointer invert'
        src="https://openwebui.com/logo.png"
        alt=""
      />

      <div className='flex gap-5 text-sm items-center'>
        <div>AI Leaderboard</div>
        <div>blogs</div>
        <div>Communitys</div>
        <div>docs</div>
        <div className='mr-2 p-2 rounded cursor-pointer bg-gray-500'>
          Sign In
        </div>
      </div>

    </div>
  )
}

export default AiNav
