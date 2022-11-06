import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProvideSection from '../components/ProvideSection'

const services = () => {
  return (
    <div>
        <Header/>
         <div className="max-h-full h-[70vh] w-full mx-auto bg-gradient-to-b from-transparent to-white bg-opacity-50 bg-center bg-cover px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center flex flex-col items-center justify-center relative">
        <img className='absolute mix-blend-overlay h-full w-full object-cover' src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/corner-sofas-1658839922.jpg?crop=0.503xw:1.00xh;0,0&resize=640:*"/>
        <h2 className="tracking-widest title-font font-semibold text-gray-700 text-5xl mb-1">Our Services</h2>
          <h2 className="tracking-widest title-font font-medium text-gray-700 mb-1">Interior Design</h2>
          
        </div>

        <ProvideSection more/>
        <Footer/>
    </div>
  )
}

export default services