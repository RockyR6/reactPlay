import { useState } from "react";
import  assets  from "../assets/assets";
import ToggleTheme from "./ToggleTheme";

const Navbar = ({theme, setTheme}) => {

  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="flex justify-between items-center px-5 py-5 font-bold">
        {/* Left side - Explore and Search */}
        <div className="flex flex-row items-center gap-4">
          <h1 className=" cursor-pointer">Explore</h1>
          <input type="text" placeholder="Search" />
        </div>

        {/* Center - NASA Logo */}
        <div className=" flex justify-center">
          <img src={assets.nasalogo} alt="nasa_logo" className="w-20 h-12 cursor-pointer " />
        </div>

        {/* Right side - Navigation items */}
        <div className="flex flex-row gap-2 cursor-pointer">
          <h1 className="inline-block mx-1 cursor-pointer">News & Events</h1>
          <h1>Multimedia</h1>
          <div className={` text-gray-700 dark:text-white sm:text-sm ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>
        <p  className='w-5 absolute right-4 top-4 sm:hidden' onClick={() => setSidebarOpen(false)}>X</p>
        <a onClick={() => setSidebarOpen(false)} href="#" className='sm:hover:border-b'>Home</a>
        <a onClick={() => setSidebarOpen(false)} href="#services" className='sm:hover:border-b'>Services</a>
        <a onClick={() => setSidebarOpen(false)} href="#our-work" className='sm:hover:border-b'>Our Work</a>
        <a onClick={() => setSidebarOpen(false)} href="#contact-us " className='sm:hover:border-b'>Contact Us</a>
      </div>
          <div className=" mr-7 cursor-pointer">
            NASA+{" "}
            <span className=" px-2 border border-red-600 cursor-pointer hover:bg-red-500 font-thin text-xs">
              LIVE
            </span>
            <ToggleTheme theme={theme} setTheme={setTheme}/>
            <h1 onClick={()=> setSidebarOpen(true)} className='w-8 sm:hidden'>Hamburgurmenu</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
