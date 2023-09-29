import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

import logoLgImg from "@/public/images/icons/logos/logo-black-lg.png";
import pfpPlaceHolder from "@/public/images/pictures/pfp.png";

import visaSvg   from "@/public/images/icons/payment/visa.svg";
import masterSvg from "@/public/images/icons/payment/master.svg";
import eloSvg    from "@/public/images/icons/payment/elo.svg";
import pixSvg    from "@/public/images/icons/payment/pix.svg";

// --- General --- //
export const logo = logoLgImg;


// --- Header --- //
export const routes = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'Catalog',
        href: '/catalog',
    },
    {
        label: 'About',
        href: '/about',
    },
    {
        label: 'Contact',
        href: '/contact',
    }
] as const;


// --- Footer --- //
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
        label: "Terms & Conditions",
    },
    {
        href: "/privacy-politics",
        label: "Privacy Politics",
    },
    {
        href: "/contact",
        label: "Contact Us",
    },
    {
        href: "/about",
        label: "About Us",
    },
] as const;

export const storeAccount = [
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
        src: visaSvg,
        alt: "Visa",
    },
    {
        src: masterSvg,
        alt: "Mastercard",
    },
    {
        src: eloSvg,
        alt: "Elo",
    },
    {
        src: pixSvg,
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


// --- About Page --- //
export const frequentQuestions = [
    {
        header: "Why can't I buy products?",
        body: "This website is not a real store, but rather a personal project that uses the copyright of Cantinho da Moda. Therefore, if you want to buy products, contact the official store.",
        footer: {
            text: "To contact us, visit the page: ",
            url: "/contact",
            label: "contact"
        }
    },
    {
        header: "What types of products are sold?",
        body: "At Cantinho da Moda we sell everything from summer to winter clothes. In addition, we also sell accessories, such as bags, earrings, necklaces and bracelets.",
        footer: {
            text: "Go to our page and enjoy: ",
            url: "/catalog",
            label: "catalog"
        }
    },
    {
        header: "How do I use the \"catalog\" page?",
        body: "Simply change the search customizations, located on the left and top right corner of the page, and it will automatically update the products based on your selection.",
        footer: {
            text: "Go now and see new products: ",
            url: "/catalog",
            label: "catalog"
        }
    },
    {
        header: "What are the payment methods?",
        body: "When visiting our physical store, we accept debit and credit cards from Visa, Mastercard, Elo and Cabal. Additionaly, we also accept payment via Pix and Banri Compras.",
        footer: {
            text: "If you have questions, contact us at: ",
            url: "/contact",
            label: "contact"
        }
    },
] as const;


// --- Contact Page --- //
export const teamMembers = [
    {
        src: pfpPlaceHolder,
        name: "Mônica Lima",
        title: "Business Owner",
        email: "example-name@email.com",
    },
    {
        src: pfpPlaceHolder,
        name: "Bruno Wünsch",
        title: "Development Manager",
        email: "bruno_wunsch@hotmail.com",
    },
    {
        src: pfpPlaceHolder,
        name: "Name Lastname",
        title: "Marketing Manager",
        email: "example-name@email.com",
    },
] as const;