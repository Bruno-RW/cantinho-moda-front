import { useMemo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { GrClose } from "react-icons/gr";
import { AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
    const pathname = usePathname();
    const routes = useMemo( () => [
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
    ], [] );

  return (
        <nav className="flex items-center justify-center m-0">
            {routes.map( item => (
                <li className="relative list-none px-5 text-xl lg:text-base">
                    <Link href={item.href} className="text-[#1A1A1A] font-semibold no-underline">{item.label}</Link>
                </li>
            ))}

            <Link href="/login" id="li-usuario">
                <AiOutlineUser size={24} />
            </Link>

            <Link href="#" id="fechar" className="hidden">
                <GrClose size={22}/>
            </Link>
        </nav>
    );
}
export default Navbar;