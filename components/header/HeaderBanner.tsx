interface HeaderBannerProps {title: string; text: string}

const HeaderBanner: React.FC<HeaderBannerProps> = ({ title, text }) => {
  return (
    <section className="flex flex-col text-center justify-center p-[14px] h-[40vh] w-full bg-cover bg-[url('/images/banners/b8.png')]">
      <h2 className="text-white text-2xl md:text-5xl lg:text-6xl font-bold">{title}</h2>
      <p className="text-white text-sm md:text-base lg:text-lg mt-8">{text}</p>
    </section>
  );
}
export default HeaderBanner;