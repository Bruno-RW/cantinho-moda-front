import Link from "next/link";
// import Image from "next/image";

import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";


const Header = () => {
    return (
        <header className="flex items-center justify-between sticky">
            {/* <Link href="/"><Image src="/assets/img/icones/logos/logo-black.png" className="logo" alt="Logo"/></Link> */}

            <nav className="flex items-center justify-center m-0">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/catalogo">Catálogo</Link></li>
                <li><Link href="/sobre">Sobre</Link></li>
                <li><Link href="/contato">Contato</Link></li>
                <Link href="#" id="fechar"><GrClose size={22}/></Link>
            </nav>

            <div id="celular">
                <FaBars />
            </div>
        </header>
    );
}
export default Header;