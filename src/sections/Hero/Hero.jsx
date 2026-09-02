import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import "./Hero.css";

const technologies = [
  "Python",
  "Django",
  "React",
  "JavaScript",
  "REST API",
];

function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background */}
      <div className="hero-grid"></div>
      <div className="hero-glow"></div>

      <div className="hero-container">

        {/* Small Top Label */}
        <motion.div
          className="hero-status"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="status-dot"></span>
          AVAILABLE FOR WORK
        </motion.div>

        {/* Main Heading */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <p className="hero-intro">
            HI, I'M <span>SUFIYAN ALI</span>
          </p>

          <h1>
            FULL STACK
            <br />
            <span>DEVELOPER.</span>
          </h1>

          <p className="hero-description">
            I build modern, scalable and high-performance
            digital experiences with clean code and thoughtful design.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <a href="#work" className="hero-primary-btn">
            VIEW MY WORK
            <ArrowUpRight size={17} />
          </a>

          <a href="#contact" className="hero-secondary-btn">
            LET'S TALK
          </a>
        </motion.div>

        {/* Technologies */}
        <motion.div
          className="hero-technologies"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span className="tech-label">TECHNOLOGIES</span>

          <div className="tech-list">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.7 + index * 0.08,
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={16} />
      </motion.a>

      {/* Side Number */}
      <div className="hero-number">01</div>
    </section>
  );
}

export default Hero;