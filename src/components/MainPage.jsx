import React from 'react'

function MainPage() {
  return (
    <div>
      <h1 className='text-7xl text-center pt-20'>Welcome !!!</h1>
      <h2 className='text-3xl text-center pt-10'>Here are my projects</h2>
      <div className='flex justify-around mt-10'>
        <div className='flex flex-col items-center'>
          <a href='https://prep-gk-frontend.onrender.com/login' className='h-24 w-24 bg-red-500 rounded-lg text-center flex items-center justify-center'>
            PrepGK
          </a>
          <p className='pt-2 text-left max-w-52 mt-6'>In this project I have implemented both backend and front-end technologies.</p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='h-24 w-24 bg-blue-500 rounded-lg text-center flex items-center justify-center'>
            API fetch
          </div>
          <p className='pt-2 text-left max-w-52 mt-6'>In this project I have showcased how to effectively fetch and utilize the data using APIs</p>
        </div>
        <div className='flex flex-col items-center'>
          <div className='h-24 w-24 bg-green-500 rounded-lg text-center flex items-center justify-center'>
            Aestetic site
          </div>
          <p className='pt-2 text-left max-w-52 mt-6'>In this I have demonstrated my knowledge about CSS and Styling skills</p>
        </div>
      </div>
    </div>
  )
}

export default MainPage
