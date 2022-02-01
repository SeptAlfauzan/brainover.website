import Link from "next/link";
import React from "react";
import {MenuOutline, CloseOutline} from 'react-ionicons';


const Navbar = () => {
    const [active, setActive] = React.useState(false)

    const handleOpenNavbar = () => setActive(!active)
    
    return(
        <>
            <nav className={`md:visible ${active? '' : '-translate-x-full'} md:translate-x-0 transition-all duration-200 w-full fixed bg-blue-50 md:bg-white md:h-auto h-screen z-50 text-black`}>
                <ul className="flex md:flex-row flex-col gap-2 px-10 py-5 justify-center items-center h-full md:h-auto">
                    <li  className="text-xl">
                        <a href='#home-section' onClick={handleOpenNavbar}>Home</a>
                    </li>
                    <div className="md:ml-auto flex md:flex-row flex-col gap-2 text-center">
                        <li  className="text-xl">
                            <a href='#about-section' onClick={handleOpenNavbar}>About</a>
                        </li>
                        <li  className="text-xl">
                            <a href='#work-section' onClick={handleOpenNavbar}>Work</a>
                        </li>
                        <li  className="text-xl">
                            <a href='#contact-section' onClick={handleOpenNavbar}>Contact Us</a>
                        </li>
                    </div>
                <button className="visible md:invisible fixed top-10 right-10" onClick={handleOpenNavbar}>
                    <CloseOutline width={'50px'} height={'50px'}/>
                </button>
                </ul>
            </nav>
            <button className="block md:hidden fixed top-5 ml-4 bg-white shadow-lg z-40 rounded" onClick={handleOpenNavbar}>
                <MenuOutline width={'50px'} height={'50px'}/>
            </button>
        </>
    )
}

export default Navbar;