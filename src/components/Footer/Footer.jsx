import { ArrowUpRight, ArrowUp } from "lucide-react";
import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Top */}
        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              SUFIYAN<span>.</span>
            </a>

            <p>
              Full Stack Developer building modern,
              scalable, and meaningful digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <div className="footer-column">
            <span className="footer-title">
              NAVIGATION
            </span>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Connect */}
          <div className="footer-column">
            <span className="footer-title">
              CONNECT
            </span>

            <a
              href="https://github.com/SUFIYAN9009"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <ArrowUpRight size={14} />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
              <ArrowUpRight size={14} />
            </a>

            <a href="mailto:satkhanhello32199@gmail.com">
              Email
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Back To Top */}
          <button
            type="button"
            className="footer-top-button"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>

        </div>

        {/* Large Brand */}
        <div className="footer-big-text">
          SUFIYAN<span>.</span>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">

          <span>
            © 2026 SUFIYAN ALI
          </span>

          <span>
            DESIGNED & BUILT WITH PURPOSE
          </span>

          <span>
            FULL STACK DEVELOPER
          </span>

        </div>

      </div>
    </footer>
  );
}

export default Footer;