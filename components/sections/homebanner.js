import React, { useEffect, useRef } from "react";
import Image from "next/image";
import MainLogo from '../../public/logo-brainover.svg'
import { gsap } from "gsap";


const HomeBanner = () => {
    const headerTopRef = useRef();
    const headerBottomRef = useRef();
    const colorGradient = "linear-gradient(90deg, rgba(29,0,36,1) 0%, rgba(73,9,121,1) 35%, rgba(0,212,255,1) 100%);"
    useEffect(()=>{
      // gsap.to(headerTopRef.current, {color: "#121212", repeat: -1, duration: 3})
      // .to(headerBottomRef.current, {color: "#121212", repeat: -1, duration: 3})
    },[])

    return (
        <div id="home-section" className='w-full h-screen flex justify-center items-center flex-col'>
          <div className='relative w-2/4 h-2/4 flex flex-col justify-center items-center md:mt-0 -mt-20'>
            <div className='md:w-96 md:h-96 w-72 h-72 relative bg-blue-50 p-10'>
              <Image src={MainLogo} alt='Brain.over logo' layout='fill'/>
            </div>
            <div className='absolute md:-left-10 md:top-5 -left-20 -top-1'>
              <h3 className='text-8xl md:text-9xl text-gray-700' ref={headerTopRef}>Brain</h3>
            </div>
            <div className='absolute md:right-0 md:-bottom-10 -bottom-1 -right-20'>
              <h3 className='text-8xl md:text-9xl text-gray-700' ref={headerBottomRef}>Over</h3>
            </div>
          </div>
        </div>
    )
}
export default HomeBanner;