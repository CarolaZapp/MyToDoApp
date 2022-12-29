import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <NavLink to="/MyToDoApp/main" className={"navLink"}>
        Main
      </NavLink>
      <NavLink to="/MyToDoApp/about" className={"navLink"}>
        About
      </NavLink>
      <NavLink to="/MyToDoApp/login" className={"navLink"}>
        Login
      </NavLink>
    </nav>
  );
};

export default Navbar;
