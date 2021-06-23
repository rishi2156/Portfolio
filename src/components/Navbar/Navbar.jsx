import { useState } from "react";
import { Link } from "react-router-dom";
import Burger from "../Burger/Burger";
// import Education from "../Education/Education";
// import Gallery from "../Gallery/Gallery";
// import Skills from "../Skills/Skills";
// import Contact from "../Contact/Contact";
// import Home from "../Home/Home";
import "./Navbar.css";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  return (
    <nav className="navBar">
      <div className="hamburger" onClick={handleToggle}>
        <Burger status={navbarOpen}></Burger>
      </div>
      <div className={`${navbarOpen ? "menuNav showMenu" : ""}`}>
        <ul className={`${navbarOpen ? "showMenu" : ""}`}>
          <Link to="/" onClick={() => handleToggle()}>
            <li>Home</li>
          </Link>
          <Link to="/education" onClick={() => handleToggle()}>
            <li>Education</li>
          </Link>
          <Link to="/skills" onClick={() => handleToggle()}>
            <li>Skills</li>
          </Link>
          <Link to="/gallery" onClick={() => handleToggle()}>
            <li>Gallery</li>
          </Link>
          <Link to="/contact" onClick={() => handleToggle()}>
            <li>Connect</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
