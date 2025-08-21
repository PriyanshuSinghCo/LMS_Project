import React from 'react'

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70">
        <h1 className="text-xl md:text-4xl font-semibold relative text-gray-800 max-w-3xl mx-auto">Empower your future with the courses designed to <span className="text-blue-600">fit your choice</span></h1>


    <p className="md:block hidden text-gray-500 max-w-2xl mx-auto">We bring together world-class instructors, interactive content, and a supportive commiunity to help you achive your personal and professional goals.</p>

    <p className="md:hidden text-gray-500 max-w-sm mx-auto">We bring together world-class instructors to help you achive your personal and professional goals</p>

    </div>
  )
}

export default Hero