import React from 'react'

const AiNav = () => {
  return (
    <div className='flex justify-between mt-3 text-white'>
      <img className='h-8 w-8 cursor-pointer'
      src="https://openwebui.com/logo.png" alt="" />
      <div className='flex justify-between gap-3 text-sm '>
        <div>AI Leaderboard</div>
        <div>blogs</div>
      <div>Communitys</div>
      <div>docs</div>
      <div className=' mr-2 p-2 rounded -mt-2 transition cursor-pointer bg-gray-500 '>Sign In</div>
      </div>
    </div>
  )
}

export default AiNav
