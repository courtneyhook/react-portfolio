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
    <div className="content">
      <div>
        <h3>Contact Me</h3>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <label htmlFor="userName" className="form-label">
              Name:
            </label>
            <input name="userName" type="text" />
          </div>
          <br />
          <div>
            <label htmlFor="email">Email:</label>
            <input name="email" type="text" />
          </div>
          <br />
          <div>
            <label htmlFor="message">Message:</label>
            <textarea name="message" type="text" rows={10} cols={40} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
