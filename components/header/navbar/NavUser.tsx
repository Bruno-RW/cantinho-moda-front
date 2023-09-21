"use client";

import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

import { AiOutlineUser } from "react-icons/ai";

interface NavUserProps { className?: string }

const NavUser: React.FC<NavUserProps> = ({ className }) => {
    const pathName = (usePathname() === "/login");
    const user = false;

    //TODO: handleOnClick();

    return (
        <>
            {user ? (
                <li className={twMerge("relative list-none px-3 sm:px-5 text-[#1A1A1A] text-xl lg:text-base font-semibold no-underline", className)}>
                    <button className={twMerge(pathName && "text-[#B79130] after:absolute after:content-[''] after:w-[30%] after:h-[2px] after:left-5 after:bottom-[-4px] after:bg-[#B79130]")} onClick={() => {}}>
                        <AiOutlineUser size={28} />
                    </button>
                </li>
            ) : (
                <li className={twMerge("relative list-none px-3 sm:px-5 text-[#1A1A1A] text-xl lg:text-base font-semibold no-underline", className)}>
                    <Link href="/login" className={twMerge(pathName && "text-[#B79130] after:absolute after:content-[''] after:w-[30%] after:h-[2px] after:left-5 after:bottom-[-4px] after:bg-[#B79130]")}>
                        <AiOutlineUser size={28} className="transition duration-150 hover:text-[#B79130]" />
                    </Link>
                </li>
            )}
        </>
    );
}
export default NavUser;