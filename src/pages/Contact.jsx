import { useState } from "react";

function Contact() {
  const [userName, setuserName] = useState(" ");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setuserName(" ");
    setEmail(" ");
    setMessage(" ");
    console.log("submitted");
    console.log(userName);
    console.log(email);
    console.log(message);
  };

  return (
    <>
      <h3>Contact Me</h3>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="userName">Name:</label>
        <input
          name="userName"
          type="text"
          onChange={(e) => setuserName(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          name="email"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          type="text"
          rows={10}
          cols={40}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Contact;
