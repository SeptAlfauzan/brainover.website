import React from "react";
import Slider from "../slider";

const Work = ({ listData }) => {
  return (
    <div
      id="work-section"
      className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-transparent via-teal-100 to-transparent"
    >
      <h3 className="mb-10 w-full text-center text-5xl">Our Work</h3>
      {/* card work */}
      <Slider listData={listData} />
    </div>
  );
};

export default Work;
