"use client";

import SubmitButton from "./SubmitButton";

const ContactForm = () => {
  return (
    <form className="flex flex-col" method="post">
      <input className="borderBlack h-14 px-4 rounded-sm transition-all outline-none"
        type="email"
        name="email"
        autoComplete="email"
        placeholder="Your email"
        maxLength={100}
        required
      />

      <textarea className="borderBlack h-52 my-3 p-4 rounded-sm transition-all outline-none"
        name="text"
        placeholder="Your message"
        maxLength={2000}
        required
      />

      <SubmitButton />
    </form>
  );
}
export default ContactForm;