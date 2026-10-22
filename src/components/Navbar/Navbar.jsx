
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import "./Navbar.css";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length) {
          setActiveSection(`#${visibleSections[0].id}`);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = (href) => {
    setMenuOpen(false);
    setActiveSection(href);

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
      initial={{ y: -35, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="navbar-container">
        {/* LOGO */}
        <a
          href="#home"
          className="navbar-logo"
          onClick={(e) => {
            e.preventDefault();
            closeMenu("#home");
          }}
        >
          SUFIYAN<span>.</span>
        </a>

        {/* DESKTOP NAV */}
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;

            return (
              <a
                key={item.name}
                href={item.href}
                className={isActive ? "active" : ""}
                aria-current={isActive ? "location" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  closeMenu(item.href);
                }}
              >
                {item.name}

                {isActive && (
                  <motion.span
                    className="nav-active-indicator"
                    layoutId="nav-active-indicator"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* RIGHT SIDE */}
        <div className="navbar-right">
          <div className="availability">
            <span className="availability-dot" />
            Available for work
          </div>

          <a
            href="#contact"
            className="navbar-cta"
            onClick={(e) => {
              e.preventDefault();
              closeMenu("#contact");
            }}
          >
            Let's Talk
            <ArrowUpRight size={15} />
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={menuOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                transition={{ duration: 0.15 }}
                style={{ display: "flex" }}
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* MOBILE NAV */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href;

              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={isActive ? "active" : ""}
                  aria-current={isActive ? "location" : undefined}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={(e) => {
                    e.preventDefault();
                    closeMenu(item.href);
                  }}
                >
                  <span>{item.name}</span>
                  <ArrowUpRight size={16} />
                </motion.a>
              );
            })}

            <a
              href="#contact"
              className="mobile-cta"
              onClick={(e) => {
                e.preventDefault();
                closeMenu("#contact");
              }}
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
