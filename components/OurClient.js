import React from "react";
import { Autoplay } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import Arrow from "../assets/arrow-right.png";



const OurClient = () => {
  return (
    <div className="bg-black w-full relative h-56 flex items-center justify-center">
      <div className="absolute h-full z-10 left-0">
        <img src={Arrow.src} className="h-full" />
      </div>

      <div className="absolute z-20 flex justify-around space-x-10 items-center px-12">
        <div>
        <h1 className="text-4xl text-white font-semibold z-20">Our Clients</h1>
        <hr className="mt-8 w-1/3"/>
        </div>
        <div className="bg-white h-4/5 py-7">
          <Swiper
            watchSlidesProgress={true}
            slidesPerView={2}
            className="logoSwiper"
            loop={true}
            autoplay={{
              delay: 500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
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
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <SwiperSlide key={i}>
                <img
                  src={`https://source.unsplash.com/random/200x200?sig=${i}`}
                  style={{ width: "100px", margin: "0 auto" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurClient;
