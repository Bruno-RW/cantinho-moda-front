import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

import visaImg from "@/public/images/icons/payment/visa.png";
import masterImg from "@/public/images/icons/payment/master.png";
import eloImg from "@/public/images/icons/payment/elo.png";
import pixImg from "@/public/images/icons/payment/pix.png";

export const storeContact = [
    {
        label: "Schedule",
        text: "Monday to Friday, 08:30 AM - 06:00 PM",
    },
    {
        label: "Address",
        text: "Avenida Tucunduva, 300 - Room 101",
    },
    {
        label: "Phone",
        text: "(55) 9 9988-0103",
    },
] as const;

export const storeInfo = [
    {
        href: "/terms-conditions",
        label: "Schedule",
    },
    {
        href: "/privacy-politics",
        label: "Address",
    },
    {
        href: "/about",
        label: "Phone",
    },
    {
        href: "/contact",
        label: "About Us",
    },
] as const;

export const storeMyAccount = [
    {
        href: "/favorites",
        label: "Favorites",
    },
    {
        href: "/logout",
        label: "Log Out",
    },
    {
        href: "/sign",
        label: "Sign In",
    },
    {
        href: "/login",
        label: "Log In",
    },
] as const;

export const storePaymentMethods = [
    {
        src: visaImg,
        alt: "Visa",
    },
    {
        src: masterImg,
        alt: "Mastercard",
    },
    {
        src: eloImg,
        alt: "Elo",
    },
    {
        src: pixImg,
        alt: "Pix",
    },
] as const;

export const storeSocials = [
    {
        icon: FaFacebook,
        href: "https://www.facebook.com/Cantinho-da-Moda-HZ-108953705391360",
        ariaLabel: "Veja nossa página no Facebook",
    },
    {
        icon: FaInstagram,
        href: "https://www.instagram.com/cantinhodamodahz/",
        ariaLabel: "Veja nosso perfil no Instagram",
    },
    {
        icon: FaWhatsapp,
        href: "https://api.whatsapp.com/send?phone=555599880103",
        ariaLabel: "Fale conosco através do WhatsApp",
    },
] as const;