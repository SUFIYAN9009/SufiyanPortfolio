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

        {/* Main Footer */}
        <div className="footer-main">

          {/* Brand */}
          <div className="footer-brand">
            <a
              href="#home"
              className="footer-logo"
              aria-label="Go to homepage"
            >
              SUFIYAN<span>.</span>
            </a>

            <p>
              Full Stack Developer building modern web
              applications with Python, Django and React.
            </p>
          </div>

          {/* Contact */}
          <div className="footer-contact">

            <span className="footer-label">
              LET'S CONNECT
            </span>

            <a
              href="mailto:satkhanhello32199@gmail.com"
              className="footer-email"
            >
              <span>satkhanhello32199@gmail.com</span>
              <ArrowUpRight size={16} />
            </a>

            <div className="footer-socials">

              <a
                href="https://github.com/SUFIYAN9009"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <ArrowUpRight size={12} />
              </a>

              <a
                href="https://www.linkedin.com/in/sufiyan-tanveer/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
                <ArrowUpRight size={12} />
              </a>

              <a href="#work">
                Selected Work
                <ArrowUpRight size={12} />
              </a>

            </div>
          </div>

        </div>

        {/* Signature */}
        <div className="footer-signature" aria-hidden="true">
          SUFIYAN<span>.</span>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">

          <span>
            © 2026 SUFIYAN ALI
          </span>

          <span className="footer-location">
            PAKISTAN · AVAILABLE FOR WORK
          </span>

          <button
            type="button"
            className="footer-top-button"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={13} />
          </button>

        </div>

      </div>
    </footer>
  );
}

export default Footer;