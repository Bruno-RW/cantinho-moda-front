"use client";

import Image from "next/image";
import Link from "next/link";

interface LogoProps { src: string; className: string; size: number }

const Logo: React.FC<LogoProps> = ({ src, className, size }) => {
    return (
        <Link href="/" aria-label="Logo">
            <Image src={src} className={className} width={size} height={size} alt="Logo" />
        </Link>
    )
}
export default Logo;