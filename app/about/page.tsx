import Image from "next/image";

import { metadata } from "../layout";
import { frequentQuestions } from "@/lib/data";

import HeaderBanner from "@/components/header/HeaderBanner";
import MapContent from "@/components/MapContent";

export default function About() {
    metadata.title = "About - Cantinho da Moda";

    return (
        <>
            <HeaderBanner title="#AboutUs" text="Discover more about us and our store" />

            <section className="section-p1 flex flex-col lg:flex-row justify-between">
                <div className="w-full lg:w-3/5 lg:mr-10 mb-10 lg:mb-0">
                    <h2 className="text-center md:text-start">Who are we?</h2>
                    <p className="text-xl text-justify md:text-start mb-5">The company Cantinho da Moda is a fashion store focused on selling clothes and accessories for women with different tastes and needs. Cantinho da Moda is always up to date with the latest fashion trends, ensuring that our customers are always elegant.</p>
                    <p className="text-xl text-justify md:text-start">Additionally, we pride ourselves on offering high-quality clothing and accessories. So, if you're looking for a reliable, high-quality fashion store, look no further than Cantinho da Moda. Come visit us and see for yourself everything we have to offer!</p>
                </div>

                <Image src="/images/banners/b9.png" width={400} height={400} className="min-w-[62vw] aspect-auto lg:min-w-[42vw] xl:min-w-[32vw] 2xl:min-w-[22vw] self-center" alt="About image" />
            </section>

            <section className="section-p1 flex flex-col">
                <h2 className="text-center md:text-start">Frequent Questions</h2>

                <div className="flex flex-wrap justify-center gap-y-5 sm:gap-x-5">
                    <MapContent data={frequentQuestions} type="question" />
                </div>
            </section>
        </>
    );
}