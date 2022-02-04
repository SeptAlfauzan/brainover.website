import React from "react";
import SliderCard from "./sliderCard";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Slider = ({ ListData }) => {

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
            items: 1.5,
            partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
        }
    }

    const listData = [
        {
            id: 0,
            images: 'https://cdn.dribbble.com/users/13604/screenshots/17198542/media/a5c0ba23b16111fc35b04fd38377f5e2.jpg?compress=1&resize=1200x900&vertical=top',
            title: 'Lorem Ipsum',
            desc: 'this is desc'
        },
        {
            id: 1,
            images: 'https://cdn.dribbble.com/users/60166/screenshots/16953545/media/6046ed03ade41de8c2eac342c688a348.jpg?compress=1&resize=1200x900&vertical=top',
            title: 'Lorem Ipsum',
            desc: 'this is desc'
        },
        {
            id: 2,
            images: 'https://cdn.dribbble.com/users/5748976/screenshots/17000975/media/bf8a1a9419081084bf491a6151e4a150.jpg?compress=1&resize=1200x900&vertical=top',
            title: 'Lorem Ipsum',
            desc: 'this is desc'
        },
        {
            id: 3,
            images: 'https://cdn.dribbble.com/users/5748976/screenshots/16799457/media/89b23074320f6b036627dcb7eb1a0191.jpg?compress=1&resize=1200x900&vertical=top',
            title: 'Lorem Ipsum',
            desc: 'this is desc'
        },
        {
            id: 4,
            images: 'https://cdn.dribbble.com/users/3028563/screenshots/16998888/media/0846750fb366943bfa6dbc126922c3dc.jpg?compress=1&resize=1200x900&vertical=top',
            title: 'Lorem Ipsum',
            desc: 'this is desc'
        },
        {
            id: 5,
            images: 'https://cdn.dribbble.com/users/13604/screenshots/16589266/media/2fc36eea4b171a42e0d14709c2ba8a0d.jpg?compress=1&resize=1200x900&vertical=top',
            title: 'Lorem Ipsum',
            desc: 'this is desc'
        },
    ]

    const handleMove = (e) => e.preventDefault()

    return (
        <div id="slider-container" className="w-3/4 overflow-clip relative">
            <div ref={sliderRef} onMouseMove={handleMove} className=" z-10 w-full h-80 flex gap-1 overflow-hidden">
                <Carousel responsive={responsive} className="inner-slide-w h-full grid md:grid-cols-7 grid-cols-3 gap-1 absolute">
                    {listData.map(data => 
                        <SliderCard key={data.id} images={data.images} title={data.title} description={data.desc}/>
                    )}
                    <SliderCard />
                    <SliderCard />
                    <SliderCard />
                    <SliderCard />
                    <SliderCard />
                </Carousel>
            </div>
        </div>
    )
}

export default Slider