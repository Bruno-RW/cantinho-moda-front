import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

import Logo from "@/components/Logo";
import ColumnTitle from "./ColumnTitle";
import ContactInfo from "./ContactInfo";
import ContentColumn from "./ContentColumn";
import LinkInfo from "./LinkInfo";
import PaymentMethod from "./PaymentMethod";
import Social from "./Social";
import Copyright from "./Copyright";

const SiteFooter = () => {
  return (
        <section id="footer" className="flex flex-wrap justify-between columns-4 pt-5 pb-3 px-5 lg:pt-10 lg:pb-5 lg:px-20">
            <div className="flex flex-col items-start max-w-[200px] lg:max-w-sm">
                <Logo src="/images/icons/logos/logo-black-lg.png" className="mb-[30px] max-w-[150px] lg:max-w-xs" size={200} />
                <ColumnTitle title="Contact" />
                <ContactInfo label="Schedule" text="Monday to Friday, 08:30 AM - 06:00 PM" />
                <ContactInfo label="Address" text="Avenida Tucunduva, 300 - Room 101" />
                <ContactInfo label="Phone" text="(55) 9 9988-0103" />
            </div>

            <ContentColumn title="Informations" >
                <LinkInfo href="/terms-conditions" label="Terms & Conditions" />
                <LinkInfo href="/privacy-politics" label="Privacy Politics" />
                <LinkInfo href="/about"            label="Our contacts" />
                <LinkInfo href="/contact"          label="About Us" />
            </ContentColumn>

            <ContentColumn title="My Account">
                <LinkInfo href="/favorites" label="Favorites" />
                <LinkInfo href="/logout"    label="Log Out"/>
                <LinkInfo href="/sign"      label="Sign In"/>
                <LinkInfo href="/login"     label="Log In"/>
            </ContentColumn>

            <ContentColumn title="Payment Methods">
                <div className="flex">
                    <PaymentMethod src="/images/icons/payment/visa.png"   alt="Visa" />
                    <PaymentMethod src="/images/icons/payment/master.png" alt="Mastercard" />
                    <PaymentMethod src="/images/icons/payment/elo.png"    alt="Elo" />
                    <PaymentMethod src="/images/icons/payment/pix.png"    alt="Pix" />
                </div>

                <div className="mt-[30px]">
                    <ColumnTitle title="Our Socials" />
                    <div className="flex">
                        <Social icon={FaFacebook} href="https://www.facebook.com/Cantinho-da-Moda-HZ-108953705391360" ariaLabel="Veja nossa página no Facebook" />
                        <Social icon={FaInstagram} href="https://www.instagram.com/cantinhodamodahz/" ariaLabel="eja nosso perfil no Instagram" />
                        <Social icon={FaWhatsapp} href="https://api.whatsapp.com/send?phone=555599880103" ariaLabel="Fale conosco através do WhatsApp" />
                    </div>
                </div>
            </ContentColumn>

            <Copyright />
        </section>
    );
}
export default SiteFooter;