import React from "react";
import SliderCard from "./sliderCard";

const Slider = ({ListData}) => {
    return(
        <div id="slider-container" className="w-3/4  border-2  overflow-clip relative">
        <div className="w-full h-80 flex gap-1 overflow-hidden">
            <div className="inner-slide-w h-full grid md:grid-cols-7 grid-cols-3 gap-1 absolute">
                <SliderCard/>
                <SliderCard/>
                <SliderCard/>
                <SliderCard/>
            </div>
        </div>
</div>
    )
}

export default Slider