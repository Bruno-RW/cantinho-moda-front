"use client";

import Image from "next/image";
import Link from "next/link";

import { logo } from "@/lib/data";

interface LogoProps {
    src?: string;
    height?: number;
    className?: string;
    quality?: number;
    priority?: boolean
}

const Logo: React.FC<LogoProps> = ({
    src = logo,
    height = 80,
    className = `max-h-[${height - height * 0.25}px] sm:max-h-[${height}px]`,
    quality = 75,
    priority = false
}) => {
    return (
        <Link href="/" aria-label="Logo">
            <Image src={src} className={className} height={height} alt="Logo" quality={quality} priority />
        </Link>
    );
}
export default Logo;