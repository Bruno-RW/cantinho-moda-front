"use client";

import Link from "next/link";
import Image from "next/image";

import useMediaQuery from "@/hooks/useMediaQuery";

import Navbar from "./header/navbar/Navbar";
import NavbarMobile from "./header/navbar/NavbarMobile";

const Header = () => {    
    const isMobile = useMediaQuery("(max-width: 768px)");

    return (
        <>
            <header className="sticky flex top-0 items-center justify-between w-screen z-50 py-[10px] sm:py-5 px-[30px] sm:px-20 bg-[#E3E6F3]">
                <Link href="/" aria-label="Logo">
                    <Image src="/images/icons/logos/logo-black.png" className="logo min-w-[120px] sm:min-w-[160px]" width={160} height={160} alt="Logo" />
                </Link>

                <Navbar />
            </header>
            {isMobile && <NavbarMobile />} 
        </>
    );
}
export default Header;