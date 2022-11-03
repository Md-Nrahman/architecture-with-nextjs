import React from 'react'
import { Pagination } from 'swiper'
import { Swiper,SwiperSlide } from 'swiper/react'

const AllWorks = () => {
  return (
    <div>
          <div className='h-60 w-full bg-slate-100 relative'>
         <div>
         <h1 className='absolute z-10 top-1/2 translate-x-2/4 -translate-y-2/4 right-1/2 font-semibold text-5xl text-center'>See All of <span className='text-indigo-600'>Our Works</span></h1>
         </div>
        <div className=' text-6xl md:text-8xl h-full flex justify-center items-center text-gray-200 font-medium'><h1 className='text-center'>PORTFOLIO</h1></div>


          </div>

          <div>
          <ul className='flex justify-end sm:text-xs md:text-xl font-light gap-2 mr-3 p-3'>
          <li>All Project</li>
                    <li>/</li>
                    <li>Building</li>
                    <li>/</li>
                    <li>Interior</li>
                    <li>/</li>
                    <li>Restaurant</li>
                </ul>
          </div>
         <Swiper
        slidesPerView={2}
        spaceBetween={1}
        
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
         {Array.from({ length: 40 }).map((_, i) => (
                <SwiperSlide key={i}>
            <img src={`https://source.unsplash.com/random/200x300?sig=${i}`} style={{width:'280px', margin:'0 auto'}}/>
        </SwiperSlide>
            ))}
      </Swiper>
    </div>
  )
}

export default AllWorks