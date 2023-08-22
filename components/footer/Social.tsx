import Link from "next/link";
import { IconType } from "react-icons";

interface SocialProps {
    icon: IconType,
    href: string,
    ariaLabel: string,
}

const Social: React.FC<SocialProps> = ({
    icon: Icon,
    href,
    ariaLabel
}) => {
  return (
    <Link href={href} target="_blank" aria-label={ariaLabel} className="mr-1">
        <Icon className="text-[#222] mr-1 hover:text-[#B79130]" size={31} />
    </Link>
  )
}
export default Social;