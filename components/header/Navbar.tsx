import { useMemo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { twMerge } from "tailwind-merge";

import { AiOutlineUser } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
    const pathname = usePathname();
    const routes = useMemo( (id?: string | undefined) => [
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
        },
        {
            label: <AiOutlineUser size={28} />,
            active: pathname === '/login',
            href: '/login',
            id: 'li-usuario',
        }
    ], [] );

  return (
        <nav>
            <ul className="flex items-center justify-center m-0">
                {routes.map( item => (
                    <li className="relative list-none px-5 text-[#1A1A1A] text-xl lg:text-base font-semibold no-underline">
                        <Link href={item.href} id={item.id} className={twMerge("hover:text-[#B79130] transition duration-200", item.active && "text-[#B79130] after:absolute after:content-[''] after:w-[30%] after:h-[2px] after:left-5 after:bottom-[-4px] after:bg-[#B79130]")}>{item.label}</Link>
                    </li>
                ))}
            </ul>

            <Link href="#" id="fechar" className="hidden">
                <GrClose size={22}/>
            </Link>
        </nav>
    );
}
export default Navbar;