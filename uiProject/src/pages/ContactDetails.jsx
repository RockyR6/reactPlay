
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ContactDetails = () => {

    const navigate = useNavigate()

    const param = useParams()
    console.log(param)
    
    const btnClick = () => {
        navigate('/')
    }

  return (
    <div>
        <button className='bg-amber-950 text-white cursor-pointer' onClick={btnClick}>Go Back Home</button>
      ContactDetails
    </div>
  )
}

export default ContactDetails
