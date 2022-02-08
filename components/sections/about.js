import React from "react";
import DotsGeometry from "../../public/images/illustrations/geometry/dots.svg";
import GridGeometry from "../../public/images/illustrations/geometry/Grid.svg";
import Image from "next/image";
import LogoDesignAnim from "../../public/lotties/design logo anim.json";
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
  return (
    <div
      id="about-section"
      className="relative flex min-h-screen flex-col items-center justify-center  overflow-clip"
    >
      <div className="relative flex flex-wrap justify-center px-12 md:w-3/4 md:px-0">
        <div className="z-10 order-2 w-full  md:order-1 md:w-1/2 md:pr-28">
          <h3 className="mb-10 w-full text-4xl text-black">
            Leading the way in our field since 1993
          </h3>
          <p className="text-lg text-gray-500">
            We are the top supplier of cooked, refrigerated prawns to the French
            market and as such, we are constantly in the process of improving
            our product offering to cement our position as the go-to player on
            the seafood products scene. We’ve succeeded in doing this by
            maintaining a steady course over the last 27 years towards our end
            destination – a shared taste for innovation!
          </p>
        </div>
        <div className="absolute bottom-16 order-3 flex w-full flex-col px-20 md:relative md:bottom-0 md:order-2 md:w-1/2 md:pl-28">
          <div className="absolute -right-24 -top-96 block h-44 w-44 opacity-30 md:right-20 md:top-10 md:opacity-100">
            <Image alt="dots geometry" src={DotsGeometry} layout="fill" />
          </div>
          <div className="absolute bottom-0 -left-10 block h-20 w-20 md:left-36">
            <Image alt="dots geometry" src={DotsGeometry} layout="fill" />
          </div>
        </div>
        <div className="relative order-1 flex h-96 w-full items-center justify-center self-center md:absolute md:order-3 md:ml-20 md:h-full md:w-1/2">
          <div className="z-1 absolute h-5/6 w-5/6 self-center">
            <Image alt="grid geometry" src={GridGeometry} layout="fill" />
          </div>
          <div className="z-1 w-78 ml-20 self-center">
            <Lottie
              animationData={LogoDesignAnim}
              interactivity={interactivity}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
