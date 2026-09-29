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

        {/* Intro */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
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
            I build modern web applications with Python,
            Django, React and JavaScript — focused on clean
            code, useful interfaces and real-world solutions.
          </p>
        </motion.div>

        {/* Actions */}
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.25,
          }}
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
          transition={{
            duration: 0.7,
            delay: 0.45,
          }}
        >
          <span className="tech-label">BUILT WITH</span>

          <div className="tech-list">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.35,
                  delay: 0.5 + index * 0.07,
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
        transition={{
          delay: 0.9,
          duration: 0.6,
        }}
      >
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={16} />
      </motion.a>

    </section>
  );
}

export default Hero;