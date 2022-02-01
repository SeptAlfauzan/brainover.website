import React from "react";
import Slider from "../slider";

const Work = () => {
    return (
        <div id="work-section" className="w-full min-h-screen bg-gradient-to-b from-transparent via-teal-100 to-transparent flex flex-col justify-center items-center">
            <h3 className="w-full text-center mb-10 text-5xl">Our Work</h3>
            {/* card work */}
            <Slider/>
        </div>
    )
}

export default Work