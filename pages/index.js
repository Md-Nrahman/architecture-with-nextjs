import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Slider from '../components/Slider'
import ProvideSection from '../components/ProvideSection'
import ExecutingCreativity from '../components/ExecutingCreativity'
import GallerySlider from '../components/GallerySlider'
import Footer from '../components/Footer'
import OurClient from '../components/OurClient'
import AllWorks from '../components/AllWorks'
import 'react-before-after-slider-component/dist/build.css';

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      data: data,
    }, // will be passed to the page component as props
  };
};

export default function Home({data}) {
 console.log(data);
  return (
    <div>
      <Head>
        <title>HomeTest</title>
      </Head>
        <Header/>
        <Slider/>
        <div className='bg-slate-50 h-[85vh] mb-11 relative'>
        <h1 className='text-center text-5xl font-semibold text pb-6 pt-12 text-gray-600'>Welcome to <span className='text-sky-700'>ARCDECO</span></h1>
        <div className=' container mx-auto mb-6 mt-20 relative'>
            <div className='md:grid md:grid-cols-2 grid-cols-1 space-x-3 justify-items-center'>
                
                    
            <img className='lg:w-5/12 md:w-6/12 ml-auto relative' src='https://image.digitalinsightresearch.in/uploads/imagelibrary/Archive/Main/01_Casa%20Cruzada.jpg'/>
                    <img className='absolute hidden md:block z-20 lg:left-32 top-[-74px] md:left-5 p-3 bg-white sm:w-0 md:w-60 lg:w-80' src='https://www.gealan.de/getattachment/89273fae-c060-4e07-a3da-eb749bebdf2c/Group-Copy.jpg'/>
                
                   
                <div className='pr-16 pl-4 lg:z-20'>
                    <h2 className='font-bold text-2xl'>We Design & Create Best Architect Around The World With Inspiration</h2>
                    <h2 className='uppercase bg-zinc-800 text-3xl p-5 font-semibold my-6'><span className='text-sky-500'>25+</span> <span className='text-white'>Years of</span> <span className='text-sky-500'>Experience</span> </h2>
                    <h3 className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum facilisis nibh varius convallis. Aliquam sed tempus dolor, vel faucibus eros. Donec quis scelerisque purus. Nulla mattis sem interdum, tristique augue id, venenatis lorem. Suspendisse vitae neque eu eros volutpat tincidunt. Phasellus consequat pharetra urna quis imperdiet. Quisque a finibus justo, sed imperdiet orci.

Mauris semper varius ex eu porta. </h3>
                <button className='p-3 bg-teal-600 text-white font-normal mt-3'>Read More</button>
                </div>
               
            </div>

                      
        </div>

        <div className='hidden lg:block absolute z-0 right-[-70px] top-1/2 rotate-90 text-8xl text-gray-300 font-medium'><h1>About Us</h1></div>
        </div>

       <ProvideSection/>
       <ExecutingCreativity/>
       <AllWorks/>
       <GallerySlider/>
       <OurClient/>
       <Footer/>
    </div>


  )
}
