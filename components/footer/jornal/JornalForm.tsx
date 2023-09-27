const JornalForm = () => {
  return (
    <div className="flex w-[90%] md:w-[70%] xl:w-[40%]">
      <input type="email" id="emailNews" name="email" className="text-sm w-full h-12 px-2 outline-none rounded rounded-tr-none
      rounded-br-none" placeholder="Seu endereço de e-mail" autoComplete="email" required />

      <button type="button" className="align-middle text-white text-sm font-semibold leading-3 py-2 px-4 sm:px-5 whitespace-nowrap bg-[#088178] rounded rounded-tl-none rounded-bl-none transition hover:bg-[#088179ce]">Inscreva-se</button>
    </div>
  );
}
export default JornalForm;