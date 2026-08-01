import { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";
import "../styles/header.css";


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > 0);

          const sections = document.querySelectorAll("section");
          const scrollPosition = window.scrollY + 150;

          sections.forEach((section) => {
              const top = section.offsetTop;
              const height = section.offsetHeight;

              if (
                  scrollPosition >= top &&
                  scrollPosition < top + height
              ) {
                  setActiveSection(section.id);
              }
          });
      };

      window.addEventListener("scroll", handleScroll);

      handleScroll();

      return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <nav id="navbar">
        <img
          src={logo}
          alt="Logo da clínica"
          className="logo"
        />

        <ul id="nav-links">
          <li className={`nav-item ${activeSection === "home" ? "active" : ""}`}>
            <a href="#home">Home</a>
          </li>

          <li className={`nav-item ${activeSection === "menu" ? "active" : ""}`}>
            <a href="#menu">Serviços</a>
          </li>

          <li className={`nav-item ${activeSection === "testimonials" ? "active" : ""}`}>
            <a href="#testimonials">Depoimentos</a>
          </li>

          <li className={`nav-item ${activeSection === "contact" ? "active" : ""}`}>
            <a href="#contact">Contato</a>
          </li>
        </ul>

        <div className="fale">
          <a href="#contact" className="btn-default">
            Fale conosco!
          </a>
        </div>

        <button
          id="mobile_btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i
            className={`fa-solid ${menuOpen ? "fa-x" : "fa-bars"}`}
          ></i>
        </button>
      </nav>

      <div
        id="mobile_menu"
        className={menuOpen ? "active" : ""}
      >
        <ul id="mobile_nav-links">
          <li className={`nav-item ${activeSection === "home" ? "active" : ""}`}>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>

          <li className={`nav-item ${activeSection === "menu" ? "active" : ""}`}>
            <a href="#menu" onClick={() => setMenuOpen(false)}>
              Serviços
            </a>
          </li>

          <li className={`nav-item ${activeSection === "testimonials" ? "active" : ""}`}>
            <a href="#testimonials" onClick={() => setMenuOpen(false)}>
              Depoimentos
            </a>
          </li>

          <li className={`nav-item ${activeSection === "contact" ? "active" : ""}`}>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contato
            </a>
          </li>
        </ul>

        <div className="fale-mobile">
          <a href="#contact" className="btn-default">
            Fale conosco!
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;