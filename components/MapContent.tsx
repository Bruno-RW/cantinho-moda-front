import React from "react";
import Link from "next/link";
import Image from "next/image";

type MapContentProps = {
    data: readonly any[];
    type: "contact" | "info" | "payment" | "social";
};

const MapContent = ( {data, type}: MapContentProps ) => {
    let mapData: React.JSX.Element[];

    switch (type) {
        case "contact":
            mapData = data.map((element, index) => (
                <React.Fragment key={index}>
                    <p className="text-sm text-[#222] font-medium mb-2">
                        <span className="font-bold">{element.label ?? ""}:</span> {element.text ?? ""}
                    </p>
                </React.Fragment>
            ));
            break;

        case "info":
            mapData = data.map((element, index) => (
                <React.Fragment key={index}>
                    <Link href={element.href ?? "#"} className="text-sm text-[#222] font-medium mb-[10px] no-underline hover:text-[#B79130]">
                        {element.label ?? ""}
                    </Link>
                </React.Fragment>
            ));
            break;

        case "payment":
            mapData = data.map((element, index) => (
                <React.Fragment key={index}>
                    <Image src={element.src ?? "#"} height={34} className="mr-1 last:mr-0" alt={element.alt ?? "Payment method"} />
                </React.Fragment>
            ));
            break;

        case "social":
            mapData = data.map((element, index) => {
                return (
                    <React.Fragment key={index}>
                        <Link href={element.href ?? "#"} target="_blank" className="mr-1 last:mr-0" aria-label={element.ariaLabel ?? "Social"}>
                            <element.icon className="text-[#222] transition hover:text-[#B79130]" size={31} />
                        </Link>
                    </React.Fragment>
                );
            });
            break;       
            
        default:
            throw new Error("Invalid data type");
    }

    return mapData;
}
export default MapContent;