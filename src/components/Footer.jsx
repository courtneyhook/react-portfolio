import { Link } from "react-router-dom";

import github from "../assets/github.png";
import insta from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";

export default function Footer() {
  return (
    <>
      <h1>Footer</h1>

      <Link to="https://github.com/courtneyhook">
        <img src={github} alt="" width="30" />
      </Link>
      <Link to="https://www.instagram.com/courtneyhook79/">
        <img src={insta} alt="" width="40" />
      </Link>
      <Link to="https://www.linkedin.com/in/courtney-hook-755ba330a/">
        <img src={linkedin} alt="" width="30" />
      </Link>
    </>
  );
}
