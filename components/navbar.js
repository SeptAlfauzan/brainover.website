import Link from "next/link";
import React from "react";
import { MenuOutline, CloseOutline } from "react-ionicons";

const Navbar = () => {
  const [active, setActive] = React.useState(false);

  const handleOpenNavbar = () => setActive(!active);

  return (
    <>
      <nav
        className={`md:visible ${
          active ? "" : "-translate-x-full"
        } fixed z-50 h-screen w-full bg-blue-50 text-black transition-all duration-200 md:h-auto md:translate-x-0 md:bg-white`}
      >
        <ul className="flex h-full flex-col items-center justify-center gap-2 px-10 py-5 md:h-auto md:flex-row">
          <li className="text-xl">
            <a href="#home-section" onClick={handleOpenNavbar}>
              Home
            </a>
          </li>
          <div className="flex flex-col gap-2 text-center md:ml-auto md:flex-row">
            <li className="text-xl">
              <a href="#about-section" onClick={handleOpenNavbar}>
                About
              </a>
            </li>
            <li className="text-xl">
              <a href="#work-section" onClick={handleOpenNavbar}>
                Work
              </a>
            </li>
            <li className="text-xl">
              <a href="#contact-section" onClick={handleOpenNavbar}>
                Contact Us
              </a>
            </li>
          </div>
          <button
            className="visible fixed top-10 right-10 md:invisible"
            onClick={handleOpenNavbar}
          >
            <CloseOutline width={"50px"} height={"50px"} />
          </button>
        </ul>
      </nav>
      <button
        className="fixed top-5 z-40 ml-4 block rounded bg-white shadow-lg md:hidden"
        onClick={handleOpenNavbar}
      >
        <MenuOutline width={"50px"} height={"50px"} />
      </button>
    </>
  );
};

export default Navbar;
