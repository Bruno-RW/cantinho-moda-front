import JornalForm from "./JornalForm";

const Jornal = () => {
  return (
    <section id="jornal" className="flex flex-col xl:flex-row flex-wrap items-center justify-between text-center xl:text-start py-10 px-12 sm:px-16 md:px-20 my-10 bg-[#041E42] bg-no-repeat bg-[url('/images/banners/b7.png')]">
      <div>
        <h4 className="text-white text-[1.375rem] font-bold">Inscreva-se para receber notícias</h4>
        <p className="text-[#818EA0] text-sm font-semibold mb-5 xl:mb-0">Receba atualizações no e-mail sobre nossa loja e <span className="text-[#FFBD27]">ofertas especiais</span></p>
      </div>

      <JornalForm />
    </section>
  );
}
export default Jornal;