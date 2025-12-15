import { useState } from 'react'

const Form = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    conPassword: '',
  })

  const [error, setError] = useState('')
  const [users, setUsers] = useState([])


  const handleSubmit = () => {
    const [ name, value] = e.target

    setFormData({
      [name]: value
    })
  }
  

  const stopReloading = (e) => {
    e.preventDefault()

    if(error.length < 8){
      setError('password should be 8 charecter')
      return
    }

    if(!/[!@#$%^&*(),."]/.test(password)){
      
    }

    setUsers([...users, {fullName, email, password}])

    
  }
  return (
    <div className='h-screen flex text-center justify-center'>
      <div className='bg-white rounded-lg p-6 w-96'> 
        <form onSubmit={stopReloading} className='flex flex-col items-center gap-2'>
        <input onChange={handleSubmit} value={formData.fullName} className='border-2 border-black px-3 py-1 text-xl rounded w-full' type="text" placeholder='Enter Name'/>
        <input  onChange={ha} value={email} className='border-2 border-black px-3 py-1 text-xl rounded w-full' type="email" placeholder='Enter Email'/>
        <input  onChange={(e)=> setPassword(e.target.value)} value={password} className='border-2 border-black px-3 py-1 text-xl rounded w-full' type="password" placeholder='Enter Password'/>
        <input  onChange={(e)=> setconPassword(e.target.value)} value={conPassword} className='border-2 border-black px-3 py-1 text-xl rounded w-full' type="password" placeholder='Confirm Password'/>
        {error && (
          <p className='text-red-600'>{error}</p>
        )}
        <button className='text-xl px-4 py-2 rounded bg-emerald-500 font-semibold mt-5 w-full text-white'>Summit</button>
        </form>
      </div>
      {users.map(function(elem) {
        return elem.fullName
})}
    </div>
  )
}

export default Form
