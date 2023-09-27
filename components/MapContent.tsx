import React from "react";
import Link from "next/link";
import Image from "next/image";

type MapContentProps = {
    data: readonly any[];
    type: "contact" | "info" | "payment" | "social" | "question";
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
            mapData = data.map((element, index) => (
                <React.Fragment key={index}>
                    <Link href={element.href ?? "#"} target="_blank" className="mr-1 last:mr-0" aria-label={element.ariaLabel ?? "Social"}>
                        <element.icon className="text-[#222] transition hover:text-[#B79130]" size={31} />
                    </Link>
                </React.Fragment>
            ));
        break;
            
        case "question":
            mapData = data.map((element, index) => (
                <React.Fragment key={index}>
                    <div className="question-box relative flex flex-col justify-between text-justify w-full sm:w-[44.6%] xl:w-[23%] 2xl:w-[21%] p-5 border border-[#CECACA] transition duration-200 hover:scale-[1.025]">
                        <h3 className="mb-3.5 lg:mb-4 xl:mb-5 2xl:mb-6">{element.header}</h3>

                        <div className="mb-3.5 lg:mb-4 xl:mb-5 2xl:mb-6">
                            <p>{element.body}</p>
                        </div>

                        <p>{element.footer.text}<a href={element.footer.url} className="text-[#FFBD27] font-semibold no-underline hover:underline">{element.footer.label}</a>.</p>
                    </div>
                </React.Fragment>
            ));
        break; 
        
        default:
            throw new Error("Invalid data type");
    }

    return mapData;
}
export default MapContent;