// import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

const SubmitButton = () => {
    // const { pending } = useFormStatus();
    const pending = false;

    return (
        <button className="group flex items-center justify-center text-white h-[3rem] w-[8rem] gap-2 rounded-sm bg-[#088178] outline-none transition-all focus:scale-110 hover:scale-105 hover:bg-[#076E6F] active:scale-[1.02] disabled:bg-opacity-65" type="submit" disabled={pending}>
            {pending ? (<div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>) : (<>Submit</>)}
        </button>
    );
}
export default SubmitButton;