import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
// import logo from "/icons8-todo-list-64.png";
import "./Navbar.css"; // Make sure this path is correct

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Add scroll effect to navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__container">
        <Link to="/" className="navbar__logo" onClick={closeMobileMenu}>
          <img
            src="/icons8-todo-list-64.png"
            alt="ToDo App Logo"
            className="navbar__logo-img"
          />
          <h1 className="navbar__logo-text">ToDo</h1>
        </Link>

        {/* Mobile menu button */}
        <div
          className="navbar__mobile-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation links */}
        <ul
          className={`navbar__links ${
            isMobileMenuOpen ? "navbar__links--active" : ""
          }`}
        >
          <li className="navbar__item">
            <Link to="/" className="navbar__link" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to="/about"
              className="navbar__link"
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to="/services"
              className="navbar__link"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to="/contact"
              className="navbar__link"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
