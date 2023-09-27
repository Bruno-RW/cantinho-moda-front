"use client";

import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { TbArrowBarRight } from "react-icons/tb";

import useMediaQuery from "@/hooks/useMediaQuery";

import Logo from "./Logo";
import NavUser from "./header/navbar/NavUser";
import NavContent from "./header/navbar/NavContent";

const Header = () => {    
    const [sideNav, setSideNav] = useState(false);
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <>
            <header className="sticky flex top-0 items-center justify-between w-full z-50 py-2.5 sm:py-5 px-5 sm:px-10 lg:px-20 bg-[#E3E6F3]">
                <Logo priority />
                <nav className="">
                    <ul className="flex items-center justify-center m-0">
                        {isMobile ? (
                            <>
                                <NavUser />
                                <li className="pl-3 sm:pl-5 cursor-pointer list-none" onClick={() => setSideNav(!sideNav)}>
                                    <FaBars size={28} />
                                </li>
                            </>
                        ) : (<NavContent navUser />)}
                    </ul>
                </nav>
            </header>
            
            {isMobile && (
                <nav id="nav-mobile" className={twMerge("flex fixed top-0 right-0 items-start justify-start w-[55vw] h-screen pt-20 pl-[10px] z-50 bg-[#E3E6F3] transition-all duration-150", !sideNav && "-right-[1000px]")}>
                    <button type="button" id="fechar" className={"absolute top-7 left-7 text-[#222] mb-6 transition hover:scale-105 hover:translate-x-1"} onClick={() => setSideNav(!sideNav)}>
                        <TbArrowBarRight size={32}/>
                    </button>
        
                    <ul className="flex flex-col items-start justify-center">
                        <NavContent className="text-2xl mb-6" />
                    </ul>
                </nav>
            )} 
        </>
    );
}
export default Header;