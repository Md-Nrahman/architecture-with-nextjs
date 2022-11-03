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
import AboutUs from '../components/AboutUs'

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
       <AboutUs/>
       <ProvideSection/>
       <ExecutingCreativity/>
       <AllWorks/>
       <GallerySlider/>
       <OurClient/>
       <Footer/>
    </div>


  )
}
