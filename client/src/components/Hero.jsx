import React, { useContext } from 'react'
import  assets  from '../assets/assets'
import { AuthContext } from '../../context/AuthContext'

const Hero = () => {

  const {logout} = useContext(AuthContext)
  return (
    <div>
      <img src={assets.heroRocket} alt="" width='full' />
      <button className='mx-auto block bg-gradient-to-r from-purple-400 to-violet-600 text-white border-none text-sm font-light py-2 px-20 rounded-full cursor-pointer'
      onClick={() => logout()}>LOGOUT</button>
    </div>
  )
}

export default Hero
