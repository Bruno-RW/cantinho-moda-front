import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import { FaBars } from "react-icons/fa";

import useMediaQuery from "@/hooks/useMediaQuery";

import NavUser from "./NavUser";

const NavContent = () => {
    const pathname = usePathname();

    const routesDesktop = [
        {
            label: 'Home',
            active: pathname === '/',
            href: '/',
        },
        {
            label: 'Catalog',
            active: pathname === '/catalog',
            href: '/catalog',
        },
        {
            label: 'About',
            active: pathname === '/about',
            href: '/about',
        },
        {
            label: 'Contact',
            active: pathname === '/contact',
            href: '/contact',
        }
    ];

    const isMobile = useMediaQuery("(max-width: 768px)");
    const [sideNav, setSideNav] = useState(false);

    return (
        <>
            {isMobile ? (
                <>
                    <NavUser href="/login" className="" />
                    <li className="static sm:hidden cursor-pointer" onClick={() => setSideNav(!sideNav)}>
                        <FaBars className={twMerge("sm:hidden absolute top-[35.5px] right-[80px]", sideNav && "right-0")} size={28} />
                    </li>
                </>

            ) : (
                <>
                    {routesDesktop.map( item => (
                        <li key={item.href} className="relative list-none px-5 text-[#1A1A1A] text-xl lg:text-base font-semibold no-underline">
                            <Link href={item.href} className={twMerge("hover:text-[#B79130] transition duration-200", item.active && "text-[#B79130] after:absolute after:content-[''] after:w-[30%] after:h-[2px] after:left-5 after:bottom-[-4px] after:bg-[#B79130]")}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                    <NavUser href="/login" />
                </>
            )}
        </>
    );
}
export default NavContent;