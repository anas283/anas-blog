import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="flex max-w-screen-lg mx-auto items-center justify-between px-6 py-6 md:px-0 overflow-x-hidden">
      <div className="flex justify-between w-full">
        <div className="grid grid-cols-2 gap-5">
          <a href="https://github.com/anas283" target="_blank" className="h-fit text-gray-600 hover:text-blue-500 text-center cursor-pointer ease-in-out duration-150">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/anas283/" target="_blank" className="h-fit text-gray-600 hover:text-blue-500 text-center cursor-pointer ease-in-out duration-150">
            LinkedIn
          </a>
        </div>
        <div className='text-gray-500'>
         © { year } Anas
        </div>
      </div>
    </div>
  )
}

export default Footer