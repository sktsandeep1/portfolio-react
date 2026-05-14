import { useState, useEffect } from "react";

const NAV_ITEMS = [
  ["hero", "Home"],
  ["about", "About"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["experience", "Experience"],
  ["cta", "Contact"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setDrawerOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      for (const [id] of NAV_ITEMS) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="nav-logo" onClick={() => scrollTo("hero")}>
          Sandeep<span>.dev</span>
        </div>
        <ul className="nav-links">
          {NAV_ITEMS.map(([id, label]) => (
            <li key={id}>
              <a
                onClick={() => scrollTo(id)}
                className={activeSection === id ? "active" : ""}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <button className="nav-cta" onClick={() => scrollTo("cta")}>
          Get in Touch
        </button>
        <button
          className="nav-mobile-toggle"
          onClick={() => setDrawerOpen(true)}
        >
          ☰
        </button>
      </nav>

      <div
        className={`nav-overlay${drawerOpen ? " open" : ""}`}
        onClick={() => setDrawerOpen(false)}
      />

      <div className={`nav-drawer${drawerOpen ? " open" : ""}`}>
        <button
          className="nav-drawer-close"
          onClick={() => setDrawerOpen(false)}
        >
          ✕
        </button>
        <ul>
          {NAV_ITEMS.map(([id, label]) => (
            <li key={id}>
              <a onClick={() => scrollTo(id)}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
