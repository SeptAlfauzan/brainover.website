import React, { useEffect, useRef } from "react";
import Image from "next/image";
import MainLogo from "../../public/images/LOGO.png";
import { gsap } from "gsap";

const HomeBanner = () => {
  const headerTopRef = useRef();
  const headerBottomRef = useRef();
  const colorGradient =
    "linear-gradient(90deg, rgba(29,0,36,1) 0%, rgba(73,9,121,1) 35%, rgba(0,212,255,1) 100%);";
  useEffect(() => {
    // gsap.to(headerTopRef.current, {color: "#121212", repeat: -1, duration: 3})
    // .to(headerBottomRef.current, {color: "#121212", repeat: -1, duration: 3})
  }, []);

  return (
    <div
      id="home-section"
      className="flex h-screen w-full flex-col items-center justify-center"
    >
      <div className="relative -mt-20 flex h-2/4 w-2/4 flex-col items-center justify-center md:mt-0">
        <div className="flex h-72 w-72 items-center justify-center rounded bg-blue-50 p-8 md:h-96 md:w-96">
          <div className="relative h-3/4 w-3/4 ">
            <Image src={MainLogo} alt="Brain.over logo" layout="fill" />
          </div>
        </div>
        <div className="absolute -left-20 -top-1 md:-left-10 md:-top-16">
          <h3 className="text-8xl text-gray-700 md:text-9xl" ref={headerTopRef}>
            Brain
          </h3>
        </div>
        <div className="absolute -bottom-1 -right-20 md:right-0 md:-bottom-10">
          <h3
            className="text-8xl text-gray-700 md:text-9xl"
            ref={headerBottomRef}
          >
            Over
          </h3>
        </div>
      </div>
    </div>
  );
};
export default HomeBanner;
