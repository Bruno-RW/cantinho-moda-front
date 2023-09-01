"use client"

import { TbArrowBarRight } from "react-icons/tb";

import NavContent from "./NavContent";

const NavbarMobile = () => {
    return (
        <nav id="nav-mobile" className="flex fixed top-0 right-0 items-start justify-start w-[55vw] h-screen pt-20 pl-[10px] z-50 bg-[#E3E6F3] transition duration-300">
            <button type="button" id="fechar" className="md:hidden absolute top-7 left-7 text-[#222] mb-6" onClick={() => {}}>
                <TbArrowBarRight size={32}/>
            </button>
            <ul className="flex flex-col items-start justify-center">
                <NavContent navUser={false} listClass="text-2xl mb-6" linkClass="" />
            </ul>
        </nav>
    );
}
export default NavbarMobile;