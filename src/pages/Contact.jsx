import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("contact_service", "template_8d6julb", form.current, {
        publicKey: "QNlqMAjlTUR9tPvkn",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <h3>Contact Me</h3>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="userName">Name:</label>
        <input name="userName" type="text" />
        <br />
        <label htmlFor="email">Email:</label>
        <input name="email" type="text" />
        <br />
        <label htmlFor="message">Message:</label>
        <textarea name="message" type="text" rows={10} cols={40} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Contact;
