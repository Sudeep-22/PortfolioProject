import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between mx-14 my-12 px-12 py-6 items-center bg-white rounded-3xl bg-opacity-30'>
      <h1 className='text-3xl'>Sudeep's Portfolio Project</h1>
      <ul className='flex gap-20 text-xl'>
        <li className=' hover:text-white hover:cursor-pointer'>Home</li>
        <li className=' hover:text-white hover:cursor-pointer'>Skill set</li>
        <li className=' hover:text-white hover:cursor-pointer'>Contact Detail</li>
      </ul>
    </div>
  )
}

export default Navbar
