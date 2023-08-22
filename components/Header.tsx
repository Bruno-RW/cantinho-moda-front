"use client"

import Image from "next/image";
import Link from "next/link";

import { FaBars } from "react-icons/fa";

import Navbar from "./header/Navbar";

const Header = () => {
    return (
        <header className="sticky flex items-center justify-between z-50 py-5 px-20 bg-[#E3E6F3]">
            <Link href="/">
                <Image src="/images/icons/logos/logo-black.png" className="logo min-w-[160px]" width={160} height={160} alt="Logo" />
            </Link>

            <Navbar />

            <div id="celular" className="hidden">
                <FaBars />
            </div>
        </header>
    );
}
export default Header;