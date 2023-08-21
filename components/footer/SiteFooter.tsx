"use client"

import Link from "next/link";
import Image from "next/image";

import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const SiteFooter = () => {

    const divClass =  "flex flex-col items-start mt-5 md:mt-0 mb-5";
    const h4Class =   "text-sm font-bold pb-5";
    const pClass =    "text-sm text-[#222] font-medium mb-2";
    const linkClass = "text-sm text-[#222] font-medium mb-[10px] no-underline hover:text-[#B79130]";
    
  return (
        <section id="footer" className="flex flex-wrap justify-between columns-4 pt-5 pb-3 px-5 lg:pt-10 lg:pb-5 lg:px-20">
            <div className="flex flex-col items-start md:max-w-[200px] lg:max-w-sm">
                <Image src="/images/icons/logos/logo-black-lg.png" width={200} height={200} className="mb-[30px] max-w-[150px] lg:max-w-xs" alt="" />
                <h4 className={h4Class}>Contact</h4>
                <p className={pClass}><span className="font-bold">Schedule: </span> Monday to Friday, 08:30 AM - 06:00 PM</p>
                <p className={pClass}><span className="font-bold">Address: </span> Avenida Tucunduva, 300 - Room 101</p>
                <p className={pClass}><span className="font-bold">Phone: </span> (55) 9 9988-0103</p>
            </div>

            <div className={divClass}>
                <h4 className={h4Class}>Informations</h4>
                <Link href="/terms-conditions" className={linkClass}>Terms & Conditions</Link>
                <Link href="/privacy-politics" className={linkClass}>Privacy Politics</Link>
                <Link href="/about"            className={linkClass}>Our contacts</Link>
                <Link href="/contact"          className={linkClass}>About Us</Link>
            </div>

            <div className={divClass}>
                <h4 className={h4Class}>My Account</h4>
                <Link href="/favorites" className={linkClass}>Favorites</Link>
                <Link href="/logout"    className={linkClass}>Log Out</Link>
                <Link href="/sign"      className={linkClass}>Sign In</Link>
                <Link href="/login"     className={linkClass}>Log In</Link>
            </div>

            <div className={divClass}>
                <h4 className={h4Class}>Payment Methods</h4>
                <div className="flex">
                    <Image src="/images/icons/payment/visa.png"   width={50} height={40} className="mr-1" alt="" />
                    <Image src="/images/icons/payment/master.png" width={50} height={40} className="mr-1" alt="" />
                    <Image src="/images/icons/payment/elo.png"    width={50} height={40} className="mr-1" alt="" />
                    <Image src="/images/icons/payment/pix.png"    width={50} height={40} className="mr-1" alt="" />
                </div>
                <div className="mt-[30px]">
                    <h4 className={h4Class}>Our Socials</h4>
                    <div className="siga flex">
                        <Link href="https://www.facebook.com/Cantinho-da-Moda-HZ-108953705391360" target="_blank">
                            <FaFacebook className="text-[#222] mr-1 hover:text-[#B79130]" size={31} />
                        </Link>
                        <Link href="https://www.instagram.com/cantinhodamodahz/" target="_blank">
                            <FaInstagram className="text-[#222] mr-1 hover:text-[#B79130]" size={31} />
                        </Link>
                        <Link href="https://api.whatsapp.com/send?phone=555599880103&data=AWBHrFuxGJ0C9sFUac-Lu26ROGuk_XJ7_ppVORczJdORXvysLB0Bi9MFZAwpodxI8bB6r-87wOL_Gd8EBfJb9elrwXQ71AwAPTV_9sUxAaQzCXSKm9XkMVXBwzcKfSAzxQQjMwsneS_TBujYs8y7lP88W9LdwDK9GrQy6QAM-g7KOYa1U6kol0z9ExGRZO9qic-nd2X-QVKBzK11qE1-jaxXQmtTcvwFtWoTWcq9tw8Wpv2ZJcScebRltzB45cnIq3gRJi-P_01NuVaB4StJ3eBMnQVEwuP86AvhlcdpfnpPHomIiaE&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR38Q4fCiTPhXLXkHKGgECGv58MCi82LvXmBKqiyjXRPL9Vf3_Qon-7KjgY" target="_blank">
                            <FaWhatsapp className="text-[#222] mr-1 hover:text-[#B79130]" size={31} />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="text-center w-full mt-[30px]">
                <p className={pClass}>© 2023 Cantinho da Moda. Todos os direitos reservados.</p>
            </div>
        </section>
    );
}
export default SiteFooter;