import Link from "next/link";
import Image from "next/image";

type MapContentProps = {
    data: readonly any[];
    type: "contact" | "info" | "payment" | "social" | "question" | "team";
};

const MapContent = ( {data, type}: MapContentProps ) => {
    let mapData: React.JSX.Element[];

    switch (type) {
        case "contact":
            mapData = data.map((element, index) => (
                <p className="text-sm text-[#222] font-medium mb-2" key={index}>
                    <span className="font-bold">{element.label ?? ""}:</span> {element.text ?? ""}
                </p>
            ));
        break;

        case "info":
            mapData = data.map((element, index) => (
                <Link className="text-sm text-[#222] font-medium mb-[10px] no-underline hover:text-[#B79130]" href={element.href ?? "#"}  key={index}>
                    {element.label ?? ""}
                </Link>
            ));
        break;

        case "payment":
            mapData = data.map((element, index) => (
                <Image src={element.src ?? "#"} width={50} className="mr-1 last:mr-0" alt={element.alt ?? "Payment method"} key={index} />
            ));
        break;

        case "social":
            mapData = data.map((element, index) => (
                <Link className="mr-1 last:mr-0" href={element.href ?? "#"} aria-label={element.ariaLabel ?? "Social"} target="_blank" key={index}>
                    <element.icon className="text-[#222] transition hover:text-[#B79130]" size={31} />
                </Link>
            ));
        break;
            
        case "question":
            mapData = data.map((element, index) => (
                <div className="question-box relative flex flex-col justify-between text-justify w-full sm:w-[44.6%] xl:w-[23%] 2xl:w-[21%] p-5 border border-[#CECACA] transition duration-200 hover:scale-[1.025]" key={index}>
                    <h3 className="mb-3.5 lg:mb-4 xl:mb-5 2xl:mb-6">{element.header}</h3>

                    <div className="mb-3.5 lg:mb-4 xl:mb-5 2xl:mb-6">
                        <p>{element.body}</p>
                    </div>

                    <p>{element.footer.text}<a href={element.footer.url} className="text-[#FFBD27] font-semibold no-underline hover:underline">{element.footer.label}</a>.</p>
                </div>
            ));
        break; 

        case "team":
            mapData = data.map((element, index) => (
                <div className="flex" key={index}>
                    <div className="border rounded-full border-black mr-5 overflow-hidden">
                        <Image src={element.src ?? "#"} width={95} className="h-auto object-cover" alt={element.title ?? "Team member"} />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h3 className="mb-1">{element.name}</h3>
                        <p className="font-semibold text-black/70">{element.title}</p>
                        <p>{element.email}</p>
                    </div>
                </div>
            ));
        break;
        
        default:
            throw new Error("Invalid data type");
    }

    return mapData;
}
export default MapContent;