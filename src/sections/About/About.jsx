import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import "./About.css";

const stats = [
  { number: "01", label: "Developer" },
  { number: "02", label: "Full Stack" },
  { number: "03", label: "Problem Solver" },
];

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* Section Header */}
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="about-label">01 / ABOUT ME</span>

          <div className="about-line"></div>

          <span className="about-year">2026</span>
        </motion.div>

        {/* Main Content */}
        <div className="about-main">

          {/* Left */}
          <motion.div
            className="about-title"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h2>
              CODE WITH
              <br />
              <span>PURPOSE.</span>
            </h2>
          </motion.div>

          {/* Right */}
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="about-lead">
              I'm a Full Stack Developer focused on building
              modern web applications that are fast, scalable,
              and easy to use.
            </p>

            <p>
              I work across the frontend and backend, turning
              ideas into complete digital products. My approach
              combines clean architecture, thoughtful user
              experiences, and maintainable code.
            </p>

            <p>
              From designing responsive interfaces to building
              powerful APIs and database-driven systems, I enjoy
              solving real-world problems through technology.
            </p>

            <a href="#contact" className="about-link">
              LET'S BUILD SOMETHING
              <ArrowUpRight size={17} />
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="about-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {stats.map((stat) => (
            <div className="about-stat" key={stat.number}>
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default About;