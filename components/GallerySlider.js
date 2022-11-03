import React from 'react'
import  { Pagination } from 'swiper'
import { SwiperSlide,Swiper } from 'swiper/react'
import '../styles/Home.module.css'

const GallerySlider = () => {
  return (
    <div className='container px-16 lg:px-20 mx-auto my-14'>

<h1 className='font-medium text-3xl md:text-5xl text-center my-14'>Creative <span className='text-indigo-600'>Expertise</span></h1>

        <Swiper watchSlidesProgress={true} slidesPerView={1} className="mySwiper"
        style={{height:'400px'}}
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
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
        >
            {Array.from({ length: 10 }).map((_, i) => (
                <SwiperSlide key={i} >
            <div className="relative bg-[url('https://assets-global.website-files.com/600ad8909e5574fbe8acbf6f/6230512181e4590a4c253b8b_photo-landon-pearson-focus.png')] bg-center bg-cover h-[380px] mr-4">
               <div className='flex justify-center'>
               <div className='absolute z-20 bottom-[-25px] bg-slate-700 text-white w-44 h-16 flex flex-col justify-center items-center'>
                    <h1 className='text-lg font-bold'>John Doe</h1>
                    <h1 className='text-cyan-500 pb-2'>Director</h1>
                    </div>
               </div>
            </div>
        </SwiperSlide>
            ))}
        
      </Swiper>
    </div>
  )
}

export default GallerySlider