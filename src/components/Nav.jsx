import { NavLink, useLocation } from "react-router-dom";

function Nav() {
  const currentPage = useLocation().pathname;

  return (
    <>
      <ul>
        <li className="nav-list color-1">
          <NavLink
            to="/"
            className={currentPage === "/" ? "nav-link active" : "nav-link"}
          >
            About Me
          </NavLink>
        </li>
        <li className="nav-list color-2">
          <NavLink
            to="/contact"
            className={
              currentPage === "/contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </NavLink>
        </li>
        <li className="nav-list color-3">
          <NavLink
            to="/portfolio"
            className={
              currentPage === "/portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </NavLink>
        </li>
        <li className="nav-list color-4">
          <NavLink
            to="/resume"
            className={
              currentPage === "/resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default Nav;
