import React from 'react'
import { Link } from 'react-router-dom'
import Instagram from '../resources/instagram.svg'

const Footer = () => {
  return (
    <div className="absolute bottom-0 right-0 left-0 container mx-auto py-7 flex justify-between items-center md:flex-row xs:flex-col">
      <div className="flex justify-center items-center xs:mb-7 md:mb-0" >
        <img className="w-5 mr-2" src={Instagram} alt="instagram" />
        <a href="https://instagram.com/crstndssn" target="_blank" className="text-gray-300 text-lg my-2 hover:underline transition duration-300 ">instagram</a>
      </div>
      <p className="text-gray-300 text-lg md:my-0 md:mt-3 xs:mb-7 xs:mt-3">cristian dussán &copy; 2023</p>
    </div>
  )
}

export default Footer
