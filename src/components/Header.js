import React, { useState } from "react";
import "./../styles/Header.css";
import logo from "./../assets/akols.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleMouseEnter = (menu) => {
    setHoveredMenu(menu);
  };

  const handleMouseLeave = () => {
    setHoveredMenu(null);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="brand">
          <img src={logo} alt="AKO Life Sciences Logo" className="header-logo" />
          <h1 className="header-company-name">AKO Life Sciences</h1>
        </div>
        <nav className={`header-navbar ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={handleMouseLeave}
              className="dropdown"
            >
              <a href="#about" onClick={closeMenu}>About Us</a>
              <span className="dropdown-arrow">▼</span>
              {hoveredMenu === "about" && (
                <ul className="dropdown-menu">
                  <li><a href="#history">Our History</a></li>
                  <li><a href="#team">Our Team</a></li>
                  <li><a href="#partners">Our Partners</a></li>
                </ul>
              )}
            </li>
            <li
              onMouseEnter={() => handleMouseEnter("products")}
              onMouseLeave={handleMouseLeave}
              className="dropdown"
            >
              <a href="#products" onClick={closeMenu}>Products</a>
              <span className="dropdown-arrow">▼</span>
              {hoveredMenu === "products" && (
                <ul className="dropdown-menu">
                  <li><a href="#dermalic">Dermalic Tincture</a></li>
                  <li><a href="#akodent">Akodent</a></li>
                </ul>
              )}
            </li>
            <li><a href="#research" onClick={closeMenu}>Research</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact Us</a></li>
          </ul>
        </nav>
        <button className="header-hamburger" onClick={toggleMenu} aria-label="Toggle navigation">
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
