import React from 'react'
import logo from "../../assest/logo.png";

//This is Navbar with Almabetter logo
const Navbar = () => {
  return (
    <div className='h-[50px] bg-white pl-5 py-2'>
      <img className='h-5' src={logo} alt='almabetter logo'/>
    </div>
  )
}

export default Navbar;
