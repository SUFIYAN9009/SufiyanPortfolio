
import "./Contact.css";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Mail,
  MessageCircle,
  Code2,
  Sparkles,
} from "lucide-react";



const contactMethods = [
  {
    label: "EMAIL",
    value: "satkhanhello32199@gmail.com",
    href: "mailto:satkhanhello32199@gmail.com",
    icon: Mail,
    description: "For projects and opportunities",
    className: "email",
    external: false,
  },
  {
    label: "WHATSAPP",
    value: "0315 992 6992",
    href: "https://wa.me/923159926992",
    icon: MessageCircle,
    description: "Let's have a quick conversation",
    className: "whatsapp",
    external: true,
  },
  {
    label: "GITHUB",
    value: "SUFIYAN9009",
    href: "https://github.com/SUFIYAN9009",
    icon: Code2,
    description: "Explore my code and projects",
    className: "github",
    external: true,
  },
  {
    label: "LINKEDIN",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/sufiyan-tanveer/",
    icon: Code2,
    description: "Let's build a professional connection",
    className: "linkedin",
    external: true,
  },
];

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-grid" aria-hidden="true" />
      <div className="contact-glow contact-glow-one" aria-hidden="true" />
      <div className="contact-glow contact-glow-two" aria-hidden="true" />

      <div className="contact-container">
        {/* Section heading */}
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <div className="contact-section-title">
            <span className="contact-eyebrow">
              <span className="contact-eyebrow-line" />
              GET IN TOUCH
            </span>
            <span className="contact-index">LET'S CONNECT / 06</span>
          </div>

          
        </motion.div>

        {/* Main content */}
        <div className="contact-main">
          {/* Left: headline and introduction */}
          <motion.div
            className="contact-intro"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75 }}
          >
            <div className="contact-kicker">
              <Sparkles size={14} />
              HAVE A PROJECT IN MIND?
            </div>

            <h2>
              Let's build
              <br />
              <span>something</span>
              <br />
              <span className="contact-outline-word">remarkable.</span>
            </h2>

            <p className="contact-description">
              Great ideas start with a conversation. Whether you have a
              project to build, a problem to solve, or an opportunity to
              discuss, I'd love to hear from you.
            </p>

            <a
              href="mailto:satkhanhello32199@gmail.com"
              className="contact-primary-button"
            >
              <span>Start a conversation</span>
              <span className="contact-button-icon">
                <ArrowUpRight size={18} />
              </span>
            </a>

            <div className="contact-note">
              <span className="contact-note-line" />
              <span>GOOD THINGS HAPPEN WHEN WE CONNECT.</span>
            </div>
          </motion.div>

          {/* Right: contact information */}
          <motion.div
            className="contact-panel"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.1 }}
          >
            <div className="contact-panel-heading">
              <div>
                <span className="contact-panel-label">CONTACT DETAILS</span>
                <h3>Find me here.</h3>
              </div>
              <span className="contact-panel-symbol">
                <ArrowDownRight size={20} />
              </span>
            </div>

            <div className="contact-methods">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;

                return (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    target={method.external ? "_blank" : undefined}
                    rel={method.external ? "noopener noreferrer" : undefined}
                    className={`contact-method contact-method-${method.className}`}
                    aria-label={`${method.label}: ${method.value}`}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.12 + index * 0.08,
                    }}
                  >
                    <span className="contact-method-icon">
                      <Icon size={19} strokeWidth={1.7} />
                    </span>

                    <span className="contact-method-content">
                      <span className="contact-method-label">
                        {method.label}
                      </span>
                      <strong>{method.value}</strong>
                      <span className="contact-method-description">
                        {method.description}
                      </span>
                    </span>

                    <span className="contact-method-arrow">
                      <ArrowUpRight size={17} />
                    </span>
                  </motion.a>
                );
              })}
            </div>

            <div className="contact-panel-footer">
              <span className="contact-footer-dot" />
              <span>OPEN TO NEW OPPORTUNITIES</span>
              <span className="contact-footer-line" />
            </div>
          </motion.div>
        </div>

        {/* Closing footer */}
        <motion.div
          className="contact-bottom"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="contact-bottom-left">
            <span className="contact-bottom-mark">ST.</span>
            <div>
              <strong>Have something in mind?</strong>
              <span>Let's turn your idea into reality.</span>
            </div>
          </div>

          <a href="mailto:satkhanhello32199@gmail.com">
            LET'S TALK
            <ArrowUpRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
