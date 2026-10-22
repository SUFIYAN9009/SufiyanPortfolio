
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Layers3, Rocket } from "lucide-react";
import "./About.css";

const highlights = [
  {
    icon: Code2,
    title: "Thoughtful Engineering",
    text: "Readable code with a clear purpose",
  },
  {
    icon: Layers3,
    title: "End-to-End Skills",
    text: "React interfaces and Django backends",
  },
  {
    icon: Rocket,
    title: "Always Improving",
    text: "Exploring ideas and refining my craft",
  },
];

function About() {
  return (
    <section className="about" id="about">
      <div className="about-grid" aria-hidden="true" />
      <div className="about-glow about-glow-one" aria-hidden="true" />
      <div className="about-glow about-glow-two" aria-hidden="true" />

      <div className="about-container">
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="about-label">ABOUT</span>
          <span className="about-header-note">
            BEHIND THE WORK
          </span>
          <div className="about-line" />
        </motion.div>

        <div className="about-main">
          <motion.div
            className="about-title"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="about-kicker">
              <span className="about-kicker-dot" />
              A DEVELOPER WITH PURPOSE
            </p>

            <h2>
              Logic meets
              <br />
              <span>creativity.</span>
            </h2>

            <p className="about-title-note">
              Building with curiosity.
              <br />
              Growing through every challenge.
            </p>
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="about-content-index">
              01 / MY APPROACH
            </span>

            <p className="about-lead">
              I'm Sufiyan, a Full-Stack Developer passionate about
              creating thoughtful digital experiences.
            </p>

            <p>
              My work brings together Python, Django, React and
              JavaScript to connect intuitive interfaces with
              dependable server-side functionality.
            </p>

            <p>
              I enjoy tackling challenges, learning new techniques
              and paying attention to the details that make a
              product feel polished.
            </p>

            <div className="about-highlights">
              {highlights.map(({ icon: Icon, title, text }, index) => (
                <motion.div
                  className="about-highlight"
                  key={title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.1,
                  }}
                >
                  <div className="about-highlight-icon">
                    <Icon size={19} strokeWidth={1.7} />
                  </div>

                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>

                  <ArrowUpRight
                    className="about-highlight-arrow"
                    size={17}
                  />
                </motion.div>
              ))}
            </div>

            <a href="#contact" className="about-link">
              HAVE A PROJECT IN MIND?
              <span className="about-link-icon">
                <ArrowUpRight size={17} />
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
