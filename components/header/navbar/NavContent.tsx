"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import NavUser from "./NavUser";
import { twMerge } from "tailwind-merge";

import { routes } from "@/lib/data";

interface NavContentProps {
    navUser?: boolean;
    className?: string;
}

const NavContent: React.FC<NavContentProps> = ({ navUser = false, className }) => {
    const pathName = usePathname();
    
    return (
        <>
            {routes.map( item => (
                <li key={item.href} className={twMerge("relative list-none px-5 text-[#1A1A1A] text-xl lg:text-base font-semibold no-underline", className)}>
                    <Link href={item.href} className={twMerge("hover:text-[#B79130] transition duration-200", pathName === item.href && "text-[#B79130] after:absolute after:content-[''] after:w-[30%] after:h-[2px] after:left-5 after:bottom-[-4px] after:bg-[#B79130]")}>
                        {item.label}
                    </Link>
                </li>
            ))}
            {navUser && <NavUser />}
        </>
    );
}
export default NavContent;