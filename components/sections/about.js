import React from "react";
import DotsGeometry from '../../public/images/illustrations/geometry/dots.svg'
import GridGeometry from '../../public/images/illustrations/geometry/Grid.svg'
import Image from 'next/image'
import LogoDesignAnim from '../../public/lotties/design logo anim.json'
import Lottie from "lottie-react";

const About = () => {
    const interactivity = {
        mode: "scroll",
        actions: [
          {
            visibility: [0, 0.2],
            type: "stop",
            frames: [0],
          },
          {
            visibility: [0.2, 0.45],
            type: "seek",
            frames: [0, 50],
          },
          {
            visibility: [0.45, 1.0],
            type: "loop",
            frames: [100],
          },
        ],
      };
    return(
        <div id="about-section" className='min-h-screen flex flex-col justify-center items-center relative  overflow-clip'>
          <div className='md:w-3/4 flex flex-wrap relative justify-center md:px-0 px-12'>
            <div className="md:w-1/2 w-full md:pr-28  z-10 md:order-1 order-2">
              <h3 className='text-4xl mb-10 w-full text-black'>Leading the way in our field since 1993</h3>
              <p className='text-lg text-gray-500'>
                We are the top supplier of cooked, refrigerated prawns to the French market and as such, we are constantly in the process of improving our product offering to cement our position as the go-to player on the seafood products scene. We’ve succeeded in doing this by maintaining a steady course over the last 27 years towards our end destination – a shared taste for innovation!
              </p>
            </div>
            <div className="md:w-1/2 w-full md:pl-28 px-20 flex flex-col md:relative absolute md:bottom-0 bottom-16 md:order-2 order-3">
              <div className='w-44 h-44 md:right-20 md:top-10 -right-24 -top-96 absolute block md:opacity-100 opacity-30'>
                <Image alt="dots geometry" src={DotsGeometry} layout="fill" />
              </div>
              <div className='w-20 h-20 md:left-36 bottom-0 -left-10 absolute block'>
                <Image alt="dots geometry" src={DotsGeometry} layout="fill" />
              </div>
            </div>
            <div className='md:absolute self-center md:ml-20 md:w-1/2 w-full md:h-full h-96 md:order-3 order-1 flex justify-center items-center relative'>
              <div className='z-1 absolute w-5/6 h-5/6 self-center'>
                <Image alt="grid geometry" src={GridGeometry} layout="fill" />
              </div>
              <div className='z-1 ml-20 w-78 self-center'>
                <Lottie animationData={LogoDesignAnim} interactivity={interactivity} />
              </div>
            </div>
          </div>
        </div>
    )
}

export default About