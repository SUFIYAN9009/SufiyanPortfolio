import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        {/* Section Header */}
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="about-label">ABOUT ME</span>

          <div className="about-line"></div>

        </motion.div>

        {/* Main Content */}
        <div className="about-main">

          {/* Title */}
          <motion.div
            className="about-title"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="about-kicker">WHO I AM</p>

            <h2>
              I BUILD
              <br />
              <span>DIGITAL PRODUCTS.</span>
            </h2>
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            className="about-photo"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <img
              src="/images/profile/profile.jpg"
              alt="Sufiyan Ali - Full Stack Developer"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="about-lead">
              I'm Sufiyan, a Full Stack Developer who builds
              modern web applications from idea to launch.
            </p>

            <p>
              I work with Python, Django, React and JavaScript
              to create responsive interfaces, reliable backends
              and complete web experiences.
            </p>

            <p>
              I care about writing clean code and building
              products that are simple to understand, easy to use
              and useful in the real world.
            </p>

            <a href="#contact" className="about-link">
              LET'S WORK TOGETHER
              <ArrowUpRight size={16} />
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;