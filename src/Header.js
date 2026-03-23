import { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const sections = ["home", "about", "skills", "experience", "education", "projects", "connect"];
    const observers = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
  ];

  return (
    <nav className={`nav ${menuOpen ? "nav--open" : ""}`}>
      <div className="nav__brand">
        <span className="title">VIVEK.A</span>
        <button
          type="button"
          className="nav__toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
          <span className="nav__toggle-bar" />
        </button>
      </div>
      <div className="align" id="primary-navigation">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={activeSection === link.href.slice(1) ? "nav-link--active" : ""}
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
        <a href="#connect" id="bg" onClick={closeMenu}>
          Connect
        </a>
      </div>
    </nav>
  );
}

export default Header;
