"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

import NavUser from "./NavUser";

interface NavContentProps {
    navUser: boolean;
    listClass?: string;
    linkClass?: string;
}

const NavContent: React.FC<NavContentProps> = ({ navUser, listClass, linkClass }) => {
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

    return (
        <>
            {routesDesktop.map( item => (
                <li key={item.href} className={twMerge("relative list-none px-5 text-[#1A1A1A] text-xl lg:text-base font-semibold no-underline", listClass)}>
                    <Link href={item.href} className={twMerge("hover:text-[#B79130] transition duration-200", item.active && "text-[#B79130] after:absolute after:content-[''] after:w-[30%] after:h-[2px] after:left-5 after:bottom-[-4px] after:bg-[#B79130]", linkClass)}>
                        {item.label}
                    </Link>
                </li>
            ))}
            {navUser && <NavUser href="/login" />}
        </>
    );
}
export default NavContent;