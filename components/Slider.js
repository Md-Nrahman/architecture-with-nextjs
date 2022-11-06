import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Slide1 from '../assets/slide1.jpg'
import Slide1C from '../assets/slide1c.jpg'
import Slide2 from '../assets/slide2.jpg'
import Slide2C from '../assets/slide2c.jpg'
import Slide3 from '../assets/slide3.jpg'
import Slide3C from '../assets/slide3c.jpg'
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';


const Slider = () => {

  const [imageState, setImageState] = useState({FIRST_IMAGE:{imageUrl:Slide1.src}, SECOND_IMAGE:{imageUrl:Slide1C.src}})
  const [imageArr, setImageArr]= useState([
    {firstImage:Slide1.src,
  secondImage:Slide1C.src},
  {firstImage:Slide2.src,
  secondImage:Slide2C.src},
  {firstImage:Slide3.src,
  secondImage:Slide3C.src},
  ])
  

useEffect(() => {
    let index=0
       setInterval(() => {
      setImageState({FIRST_IMAGE:{imageUrl:imageArr[index].firstImage},
        SECOND_IMAGE:{imageUrl:imageArr[index].secondImage}})
        index<imageArr.length-1?index++:index=0
    }, 3000);
 
}, [])


  return (
    <div className='bg-slate-400 relative'>
           <ReactBeforeSliderComponent
    firstImage={imageState?.FIRST_IMAGE}
    secondImage={imageState?.SECOND_IMAGE}
    delimiterIconStyles = {{
      width: '50px',
      height: '50px',
      backgroundSize: 'cover',
      borderRadius: 'none',
      backgroundImage: 'url(https://img.freepik.com/premium-vector/3d-gear-icon-minimal-flat-design-cogwheel-concept-teamwork-vector-illustration_41981-2075.jpg?w=740)'}
   }
/>

<div className='absolute z-20 top-2/3 right-1/2 translate-x-2/4 -translate-y-2/4 left-96'>
  <h1 className='text-6xl text-white select-none font-medium'>ARCHI</h1>
</div>
      {/* <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        fadeEffect={{ crossFade: true }}
        className="mySwiper lg:h-[80vh] md:h-[60vh] sm:h-[40vh]"
        style={{ width: '100%' }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          effect={'fade'}
        modules={[EffectFade,Autoplay, Pagination, Navigation]}
      >
       
        <SwiperSlide><img src={Slide2.src} style={{width:'100%'}}/></SwiperSlide>
        <SwiperSlide><img src={Slide3.src} style={{width:'100%'}}/></SwiperSlide>
      </Swiper> */}
    </div>
  )
}

export default Slider