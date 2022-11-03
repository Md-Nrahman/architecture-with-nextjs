import React from 'react'

const ProvideSection = () => {
  return (
    <div>
        <section className="text-gray-600 body-font">

          <h1 className='font-semibold text-5xl text-center'>What <span className='text-sky-700'>We Provide</span></h1>
  <div className="container px-5 py-8 mx-auto">
    <div className="flex flex-wrap -m-4 justify-center">
      <div className="p-4 lg:w-1/3">
        <div className="h-80 w-80 mx-auto bg-[url('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/corner-sofas-1658839922.jpg?crop=0.503xw:1.00xh;0,0&resize=640:*')] bg-center bg-cover bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center flex flex-col items-center justify-center">
        <h2 className="tracking-widest title-font font-medium text-white text-2xl mb-1">Interior Design</h2>
          <h2 className="tracking-widest title-font font-medium text-gray-400 mb-1">Interior Design</h2>
          
        </div>
      </div>

      <div className="p-4 lg:w-1/3">
        <div className="h-80 w-80 mx-auto bg-[url('https://admin.regalfurniturebd.com/storage/uploads/fullsize/2020-06/tdh-301-cfd-303.jpg')] bg-center bg-cover bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center flex flex-col items-center justify-center">
        <h2 className="tracking-widest title-font font-medium text-white mb-1 text-2xl">Floor Plan Design</h2>
          <h2 className="tracking-widest title-font font-medium text-gray-400 mb-1">Floor Plan Design</h2>
          
        </div>
      </div>

      <div className="p-4 lg:w-1/3">
        <div className="h-80 w-80 mx-auto bg-[url('https://jysk.co.uk/sites/jysk.uk/files/category_top_banner/Dining-Chair-DOKKEDAL-%26-Table-KALBY.jpg')] bg-center bg-cover bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center flex flex-col items-center justify-center">
        <h2 className="tracking-widest text-2xl title-font font-medium text-white mb-1">Construction</h2>
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Construction</h2>
          
        </div>
      </div>
      
    
    </div>
    <div className='flex justify-center'>
    <button className='p-3 bg-teal-600 text-white font-normal mt-3'>View All Services</button>
    </div>

  </div>
</section>
    </div>
  )
}

export default ProvideSection