import Image from "next/image"

interface PaymentMethodProps {src: string; alt: string}

const PaymentMethod: React.FC<PaymentMethodProps> = ({ src, alt }) => {
  return (
    <Image src={src} width={50} height={40} className="mr-1" alt={alt} />
  );
}
export default PaymentMethod