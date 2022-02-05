import React from "react";
import SliderCard from "./sliderCard";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Slider = ({listData}) => {

    const sliderRef = React.useRef()

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3.5,
            partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2.5,
            partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1.3,
            partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
        }
    }

    const handleMove = (e) => e.preventDefault()

    return (
        <div id="slider-container" className="w-3/4 overflow-clip relative">
            <div ref={sliderRef} onMouseMove={handleMove} className=" z-10 w-full h-80 flex gap-1 overflow-hidden">
                <Carousel responsive={responsive} className="inner-slide-w h-full grid md:grid-cols-7 grid-cols-3 gap-1 absolute">
                    {Array.from(listData.data).map(data => 
                        <SliderCard key={data.id} images={data.images} title={data.title} description={data.desc}/>
                    )}
                </Carousel>
            </div>
        </div>
    )
}

export default Slider