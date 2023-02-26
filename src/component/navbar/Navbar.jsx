import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenu, CgCloseR } from "react-icons/cg";
import "./navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className="navbar-box">
      <nav className="navbar">
        <div className="brand-name">
          <div>
            <a href="/" className="brand-name-brd">
              Training and Placement Cell
            </a>
          </div>
          <div style={{ height: "2px" }}></div>
          <div className="brand-name-width">
            <a href="https://cet.edu.in" className="brand-name-weight">
              Odisha University of Technology and Research
            </a>
          </div>
        </div>
          <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}>
            <Link to="/" className="nav-links-item">
               <li>HOME</li>
            </Link>
            <Link to="/about" className="nav-links-item">
              <li>ABOUT US</li>
            </Link>
            <Link to="/why-outr" className="nav-links-item">
              <li>WHY OUTR</li>
            </Link>
            <Link to="/placements" className="nav-links-item">
              <li>PLACEMENTS</li>
            </Link>
            <Link to="/our-team" className="nav-links-item">
              <li>OUR TEAM</li>
            </Link>
            <Link to="/contact" className="nav-links-item">
              <li>CONTACT US</li>
            </Link>
          </ul>
        <button
          className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? <CgCloseR style={{background:"none"}}/> : <CgMenu style={{background:"none"}} />}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
