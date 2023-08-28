import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

import { AiOutlineUser } from "react-icons/ai";

interface NavUserProps { href: string; className?: string }

const NavUser: React.FC<NavUserProps> = ({ href, className }) => {
    const pathname = (usePathname() === href);
    
    return (
        <li className={twMerge("relative list-none px-5 text-[#1A1A1A] text-xl lg:text-base font-semibold no-underline", className)}>
            <Link href="/login" className={twMerge(pathname && "text-[#B79130] after:absolute after:content-[''] after:w-[30%] after:h-[2px] after:left-5 after:bottom-[-4px] after:bg-[#B79130]")}>
                <AiOutlineUser size={28} />
            </Link>
        </li>
    );
}
export default NavUser;