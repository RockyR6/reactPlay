import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Contact = () => {

    const navigate = useNavigate()
    const [theme, setTheme] = useState('dark')

    let themeChange = () => {
        if(theme === 'dark'){
            setTheme('light')
        }else if(theme === 'light'){
            setTheme('dark')
        }
    }

    useEffect(() => {
    },[setTheme])

  return (
    <div className={`flex justify-between items-center ${theme === 'dark' ? 'bg-black h-screen' : 'bg-white h-screen'}`}>
      Contact
      <button 
      onClick={themeChange}
      className="bg-blue-800 text-white rounded-2xl text-sm p-2">{theme}</button>
       <button className='bg-amber-950 text-white cursor-pointer' 
       onClick={() =>{
        navigate('/')
       }}>
        Go Back Home</button>

        <button 
        onClick={() => {
            navigate(-1)
        }}
        className='bg-amber-950 text-white cursor-pointer'>Go Back</button>
    </div>
  )
}

export default Contact
