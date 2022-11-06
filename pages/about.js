import React from 'react'
import AboutUs from '../components/AboutUs'
import BestFeatures from '../components/BestFeatures'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SummaryCounter from '../components/SummaryCounter'

const about = () => {
  return (
    <div>
      <Header/>
          <div className="max-h-full h-[70vh] w-full mx-auto bg-gradient-to-b from-transparent to-white bg-center bg-cover px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center flex flex-col items-center justify-center relative">
        <img className='absolute mix-blend-overlay h-full w-full object-cover' src="https://media.architecturaldigest.com/photos/5d49d4d911d3930008a81c6c/master/pass/GettyImages-872448084.jpg"/>
        <h2 className="tracking-widest title-font font-medium text-5xl mb-1">About</h2>
          <h2 className="tracking-widest title-font font-medium text-white mb-1">Interior Design</h2>
          
        </div>

        <AboutUs/>
        <SummaryCounter/>
        <BestFeatures/>
        <Footer/>
    </div>
  )
}

export default about