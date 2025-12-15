import React from 'react'

const ToggleTheme = ({theme, setTheme}) => {
  return (
    <>
      <button>
        {
            theme === 'dark' ? (<p className=' text-white' onClick={()=>setTheme('light')}>Light</p>) :
            (<p  onClick={()=> setTheme('dark')} >Dark</p>)
        }
      </button>
    </>
  )
}

export default ToggleTheme
