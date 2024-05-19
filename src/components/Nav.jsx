import { Link, useLocation } from "react-router-dom";

function Nav() {
  const currentPage = useLocation().pathname;

  return (
    <>
      <ul>
        <li className="nav-list color-1">
          <Link
            to="/"
            className={currentPage === "/" ? "nav-link active" : "nav-link"}
          >
            About Me
          </Link>
        </li>
        <li className="nav-list color-2">
          <Link
            to="/contact"
            className={
              currentPage === "/contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </Link>
        </li>
        <li className="nav-list color-3">
          <Link
            to="/portfolio"
            className={
              currentPage === "/portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-list color-4">
          <Link
            to="/resume"
            className={
              currentPage === "/resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Nav;
