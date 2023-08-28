import Link from "next/link";

interface LinkInfoProps {href: string; label: string}

const LinkInfo: React.FC<LinkInfoProps> = ({ href, label }) => {
  return (
    <Link href={href} className="text-sm text-[#222] font-medium mb-[10px] no-underline hover:text-[#B79130]">
      {label}
    </Link>
  );
}
export default LinkInfo;