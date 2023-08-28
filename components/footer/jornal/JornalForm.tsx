const JornalForm = () => {
  return (
    <div className="flex w-[80%] lg:w-[40%]">
      <input type="email" id="emailNews" name="email" className="text-sm w-full h-[3.125rem] px-2 outline-none rounded rounded-tr-none
      rounded-br-none" placeholder="Seu endereço de e-mail" required />
      <button type="button" className="text-white text-sm font-semibold py-[15px] px-[30px] max-h-[3.125rem] whitespace-nowrap bg-[#088178] rounded rounded-tl-none rounded-bl-none normal">Inscreva-se</button>
    </div>
  );
}
export default JornalForm;