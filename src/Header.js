import { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const closeMenu = () => setMenuOpen(false);

  // One scroll handler, not one observer per section. #experience and
  // #education are nested inside #about, so two or three observers reported
  // "intersecting" at once and whichever fired last won — the underline jumped
  // between links. #skills was observed but has no nav link, so scrolling past
  // it blanked the underline entirely. Walking the ids in document order and
  // keeping the last one above the nav line fixes both: Skills has no id here,
  // so it falls through to About.
  useEffect(() => {
    // #connect is the footer and its nav entry is the filled Connect pill, which
    // never takes an underline — tracking it would blank the indicator at the
    // bottom of the page. Projects stays lit into the footer instead.
    const ids = ["home", "about", "experience", "education", "projects"];

    const pickActive = () => {
      const navHeight =
        parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue("--nav-height")
        ) || 64;
      const line = navHeight + 24;

      // the last section is often too short to ever cross the line
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        setActiveSection(ids[ids.length - 1]);
        return;
      }

      let current = ids[0];
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      });
      setActiveSection(current);
    };

    pickActive();
    window.addEventListener("scroll", pickActive, { passive: true });
    window.addEventListener("resize", pickActive);
    return () => {
      window.removeEventListener("scroll", pickActive);
      window.removeEventListener("resize", pickActive);
    };
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
