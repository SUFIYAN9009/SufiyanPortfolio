import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import "./Navbar.css";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
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
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
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


        {/* DESKTOP NAVIGATION */}
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

          {/* AVAILABLE STATUS */}
          <div className="availability">
            <span className="availability-dot"></span>
            AVAILABLE FOR WORK
          </div>


          {/* CTA */}
          <a
            href="#contact"
            className="navbar-cta"
            onClick={() => closeMenu("#contact")}
          >
            LET'S TALK
            <ArrowUpRight size={15} />
          </a>


          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>

        </div>
      </div>


      {/* MOBILE NAVIGATION */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-nav"
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
            }}
          >

            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => closeMenu(item.href)}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.07,
                }}
              >
                {item.name}
              </motion.a>
            ))}


            {/* MOBILE CTA */}
            <motion.a
              href="#contact"
              onClick={() => closeMenu("#contact")}
              className="mobile-cta"
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: navItems.length * 0.07,
              }}
            >
              LET'S TALK
              <ArrowUpRight size={17} />
            </motion.a>

          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;