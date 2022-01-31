import Link from "next/link";
import React from "react";
import {MenuOutline, CloseOutline} from 'react-ionicons';


const Navbar = () => {
    const [active, setActive] = React.useState(false)

    const handleOpenNavbar = () => setActive(!active)
    
    return(
        <>
            <nav className={`md:visible ${active? '' : '-translate-x-full'} md:translate-x-0 transition-all duration-200 w-full md:fixed absolute bg-blue-50 md:bg-white md:h-auto h-screen z-20 text-black`}>
                <ul className="flex md:flex-row flex-col gap-2 px-10 py-5 justify-center items-center h-full md:h-auto">
                    <li  className="text-xl">
                        <Link href='#'>Home</Link>
                    </li>
                    <div className="md:ml-auto flex md:flex-row flex-col gap-2 text-center">
                        <li  className="text-xl">
                            <Link href='#'>About</Link>
                        </li>
                        <li  className="text-xl">
                            <Link href='#'>Work</Link>
                        </li>
                        <li  className="text-xl">
                            <Link href='#'>Contact Us</Link>
                        </li>
                    </div>
                <button className="visible md:invisible fixed top-10 right-10" onClick={handleOpenNavbar}>
                    <CloseOutline width={'50px'} height={'50px'}/>
                </button>
                </ul>
            </nav>
            <button className="block md:hidden fixed top-5 ml-4 bg-white shadow-lg z-10 rounded" onClick={handleOpenNavbar}>
                <MenuOutline width={'50px'} height={'50px'}/>
            </button>
        </>
    )
}

export default Navbar;