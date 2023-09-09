"use client";

import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

import Logo from "./Logo";
import NavUser from "./header/navbar/NavUser";
import NavContent from "./header/navbar/NavContent";
import NavbarMobile from "./header/navbar/NavbarMobile";

const Header = () => {    
    const isMobile = useMediaQuery({query: "(max-width: 768px)"});
    const [sideNav, setSideNav] = useState(false);

    return (
        <>
            <header className="sticky flex top-0 items-center justify-between w-screen z-50 py-[10px] sm:py-5 px-[30px] sm:px-20 bg-[#E3E6F3]">
                <Logo src="/images/icons/logos/logo-black-lg.png" className="min-w-[120px] sm:min-w-[120px]" size={120} />
                <nav>
                    <ul className="flex items-center justify-center m-0">
                        {isMobile ? (
                            <>
                                <NavUser />
                                <li className="md:hidden cursor-pointer" onClick={() => setSideNav(!sideNav)}>
                                    <FaBars className="absolute top-[35.5px] right-[80px]" size={28} />
                                </li>
                            </>
                        ) : (<NavContent navUser />)}
                    </ul>
                </nav>
            </header>
            {isMobile && <NavbarMobile />} 
        </>
    );
}
export default Header;