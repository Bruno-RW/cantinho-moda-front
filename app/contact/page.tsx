import { FaClock, FaEnvelope, FaMap, FaPhone } from "react-icons/fa";

import { metadata } from "../layout";
import { teamMembers } from "@/lib/data";

import HeaderBanner from "@/components/header/HeaderBanner";
import ContactForm from "@/components/ContactForm";
import MapContent from "@/components/MapContent";

export default function Contact() {
    metadata.title = "Contact - Cantinho da Moda";

    return (
        <>
            <HeaderBanner title="#ContactUs" text="Contac us if you have any questions or suggestions" />

            <section className="section-p1 flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="flex flex-col justify-center mb-6 md:mb-0 md:mr-4 lg:mr-0">
                    <p>GET IN TOUCH</p>
                    <h2 className="break-keep">Visit our store</h2>
                    <h3>Information</h3>

                    <ul className="flex flex-col gap-y-2.5 list-none break-keep">
                        <li className="flex items-center"><FaMap className="mr-5" /><p>Avenida Tucunduva, 300 - Room 101</p></li>
                        <li className="flex items-center break-all"><FaEnvelope className="mr-5" /><p>cantinhomodahz@gmail.com</p></li>
                        <li className="flex items-center"><FaPhone className="mr-5" /><p>(+55) 9 9988-0103</p></li>
                        <li className="flex items-center"><FaClock className="mr-5" /><p>Monday to Friday, 08:30 AM - 06:00 PM</p></li>
                    </ul>
                </div>

                <div className="w-full md:w-1/2 h-96">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.90876954468!2d-54.31047282442903!3d-27.62734202344168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f943837a1b49b9%3A0xd06e0133fa1c0b3a!2sCantinho%20Da%20Moda!5e0!3m2!1spt-BR!2sbr!4v1681849713423!5m2!1spt-BR!2sbr"
                      referrerPolicy="no-referrer-when-downgrade"
                      loading="lazy"
                      height="100%"
                      width="100%"
                    />
                </div>
            </section>

            <section className="section-p1 flex flex-col lg:flex-row justify-between">
                <div className="w-full md:w-1/2">
                    <p>LEAVE A MESSAGE</p>
                    <h2>Contact us</h2>
                    <ContactForm />
                </div>
                <div className="w-full md:w-auto">
                    <p className="mb-5">OUR TEAM</p>
                    <div className="flex flex-col gap-y-8">
                        <MapContent data={teamMembers} type="team" />
                    </div>
                </div>
            </section>
        </>
    );
}