import { storeAccount, storeContact, storeInfo, storePaymentMethods, storeSocials } from "@/lib/data";

import Logo from "@/components/Logo";
import MapContent from "@/components/MapContent";

import ColumnTitle from "./ColumnTitle";
import ContentColumn from "./ContentColumn";
import Copyright from "./Copyright";

const SiteFooter = () => {
  return (
        <section id="footer" className="section-p1 flex flex-wrap justify-between columns-4 pt-5 lg:pt-10 pb-3 lg:pb-5">
            <div className="flex flex-col items-start max-w-[200px] lg:max-w-sm">
                <Logo className="mb-[30px] max-w-[150px] lg:max-w-xs" height={120} />

                <ColumnTitle title="Contact" />
                <MapContent data={storeContact} type="contact" />
            </div>

            <ContentColumn title="Informations" >
                <MapContent data={storeInfo} type="info" />
            </ContentColumn>

            <ContentColumn title="My Account">
                <MapContent data={storeAccount} type="info" />
            </ContentColumn>

            <ContentColumn title="Payment Methods">
                <div className="flex flex-wrap">
                    <MapContent data={storePaymentMethods} type="payment" />
                </div>

                <div className="mt-[30px]">
                    <ColumnTitle title="Our Socials" />
                    <div className="flex">
                        <MapContent data={storeSocials} type="social" />
                    </div>
                </div>
            </ContentColumn>

            <Copyright />
        </section>
    );
}
export default SiteFooter;