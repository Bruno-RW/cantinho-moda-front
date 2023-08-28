import Link from "next/link";
import { GrClose } from "react-icons/gr";

const NavbarMobile = () => {
    return (
        <nav>
            <Link href="#" id="fechar" className="sm:hidden absolute top-[30px] left-[30px] text-2xl text-[#222]">
                <GrClose size={22}/>
            </Link>
        </nav>
    );
}
export default NavbarMobile;