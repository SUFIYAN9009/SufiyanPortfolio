import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
} from "lucide-react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* Header */}
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="contact-label">CONTACT</span>

          <span className="contact-status">
            <span></span>
            AVAILABLE FOR WORK
          </span>
        </motion.div>

        {/* Main */}
        <div className="contact-main">

          {/* Left */}
          <motion.div
            className="contact-title"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h2>
              LET'S BUILD
              <br />
              <span>SOMETHING.</span>
            </h2>

            <p>
              Have a project, idea, or opportunity in mind?
              Let's turn it into something meaningful.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            className="contact-links"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >

            {/* Email */}
            <a
              href="mailto:satkhanhello32199@gmail.com"
              className="contact-card"
            >
              <div className="contact-card-icon">
  <span className="social-icon">GH</span>
</div>

              <div className="contact-card-info">
                <span>EMAIL</span>
                <strong>satkhanhello32199@gmail.com</strong>
              </div>

              <ArrowUpRight size={18} />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/923159926992"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-card-icon">
                <MessageCircle size={19} />
              </div>

              <div className="contact-card-info">
                <span>WHATSAPP</span>
                <strong>0315 992 6992</strong>
              </div>

              <ArrowUpRight size={18} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/SUFIYAN9009"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-card-icon">
  <span className="social-icon">GH</span>
</div>

              <div className="contact-card-info">
                <span>GITHUB</span>
                <strong>SUFIYAN9009</strong>
              </div>

              <ArrowUpRight size={18} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sufiyan-tanveer/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-card-icon">
  <span className="social-icon">in</span>
</div>

              <div className="contact-card-info">
                <span>LINKEDIN</span>
                <strong>CONNECT WITH ME</strong>
              </div>

              <ArrowUpRight size={18} />
            </a>

          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="contact-bottom"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span>
            HAVE AN IDEA?
          </span>

          <a href="mailto:satkhanhello32199@gmail.com">
            START A CONVERSATION
            <ArrowUpRight size={17} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;