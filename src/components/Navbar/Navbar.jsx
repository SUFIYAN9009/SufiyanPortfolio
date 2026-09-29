import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import "./Navbar.css";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
  { name: "Experience", href: "#experience" }
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = (href) => {
    setMenuOpen(false);

    setTimeout(() => {
      const section = document.querySelector(href);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <motion.header
      className="navbar"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <div className="navbar-container">

        {/* LOGO */}
        <a
          href="#home"
          className="navbar-logo"
          onClick={() => closeMenu("#home")}
        >
          SUFIYAN<span>.</span>
        </a>

        {/* DESKTOP NAV */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => closeMenu(item.href)}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="navbar-right">

          {/* AVAILABLE */}
          <div className="availability">
            <span className="availability-dot"></span>
            Available for work
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="navbar-cta"
            onClick={() => closeMenu("#contact")}
          >
            Let's Talk
            <ArrowUpRight size={15} />
          </a>

          {/* MOBILE MENU */}
          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>
      </div>

      {/* MOBILE NAV */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-nav"
            initial={{
              opacity: 0,
              y: -8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -8,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => closeMenu(item.href)}
              >
                {item.name}
                <ArrowUpRight size={15} />
              </a>
            ))}

            <a
              href="#contact"
              className="mobile-cta"
              onClick={() => closeMenu("#contact")}
            >
              Let's Talk
              <ArrowUpRight size={17} />
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;