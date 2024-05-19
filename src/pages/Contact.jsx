import { useState } from "react";

function Contact() {
  const [userName, setuserName] = useState(" ");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <>
      <h3>Contact Me</h3>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="userName">Name:</label>
        <input value={userName} name="userName" type="text" />
        <label htmlFor="email">Email:</label>
        <input value={email} name="email" type="text" />
        <label htmlFor="message">Message:</label>
        <textarea
          value={message}
          name="message"
          type="text"
          rows={10}
          cols={40}
        />
      </form>
    </>
  );
}

export default Contact;
