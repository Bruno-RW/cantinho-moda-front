interface ContactInfoProps {label: string; text: string}

const ContactInfo: React.FC<ContactInfoProps> = ({ label, text }) => {
  return (
    <>
      <p className="text-sm text-[#222] font-medium mb-2">
        <span className="font-bold">{label}:</span> {text}
      </p>
    </>
  );
}
export default ContactInfo;