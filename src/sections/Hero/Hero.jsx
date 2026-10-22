
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDown,
  Code2,
  Database,
  Layers3,
  Terminal,
  Sparkles,
  Activity,
  Globe2,
  Cpu,
  Orbit,
  Zap,
  Braces,
} from "lucide-react";
import "./Hero.css";

const technologies = [
  { name: "Python", type: "Backend", icon: "python", number: "01" },
  { name: "Django", type: "Framework", icon: "django", number: "02" },
  { name: "React", type: "Frontend", icon: "react", number: "03" },
  { name: "JavaScript", type: "Language", icon: "js", number: "04" },
  { name: "REST APIs", type: "Integration", icon: "api", number: "05" },
  { name: "MySQL", type: "Database", icon: "database", number: "06" },
];

const capabilities = [
  { icon: Code2, title: "Frontend", detail: "Interactive interfaces" },
  { icon: Terminal, title: "Backend", detail: "Logic & APIs" },
  { icon: Database, title: "Database", detail: "Data management" },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const containerReveal = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function TechIcon({ type }) {
  if (type === "python") {
    return <span className="tech-brand python-brand">Py</span>;
  }
  if (type === "django") {
    return <span className="tech-brand django-brand">dj</span>;
  }
  if (type === "react") {
    return <Orbit size={27} />;
  }
  if (type === "js") {
    return <span className="tech-brand js-brand">JS</span>;
  }
  if (type === "api") {
    return <span className="tech-api-brand">API</span>;
  }
  return <Database size={26} />;
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-background" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="hero-glow hero-glow-three" />
        <div className="hero-light-beam" />
        <div className="hero-stars" />
      </div>

      <div className="hero-container">
        <div className="hero-topline">
          <span className="hero-topline-label">
          
           
          </span>

          <span className="hero-topline-right">
            <Activity size={14} />
            SYSTEM ONLINE
          </span>
        </div>

        <div className="hero-main">
          <motion.div
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={containerReveal}
          >
            <motion.div className="hero-status" variants={reveal}>
              <span className="hero-status-dot" />
              FULL-STACK WEB DEVELOPER
            </motion.div>

            <motion.p className="hero-intro" variants={reveal}>
              Hello, I'm <span>Sufiyan Ali.</span>
            </motion.p>

            <motion.h1 variants={reveal}>
              Turning ideas
              <br />
              into <span className="hero-gradient-text">digital</span>
              <br />
              experiences<span className="hero-period">.</span>
            </motion.h1>

            <motion.p className="hero-description" variants={reveal}>
              I build modern web applications with Python, Django, React and
              JavaScript — combining thoughtful design, reliable backend
              systems, and clean code.
            </motion.p>

            <motion.div className="hero-actions" variants={reveal}>
              <a href="#work" className="hero-primary-btn">
                Explore My Work
                <ArrowUpRight size={19} />
              </a>

              <a href="#contact" className="hero-secondary-btn">
                Let's Talk
                <span className="hero-btn-arrow">↗</span>
              </a>
            </motion.div>

            <motion.div className="hero-trust-line" variants={reveal}>
              <span className="hero-trust-icon">
                <Sparkles size={16} />
              </span>
              Building practical solutions through code.
            </motion.div>

            <motion.div className="hero-mini-stats" variants={reveal}>
              <div className="hero-mini-stat">
                <span className="hero-stat-symbol">{"<>"}</span>
                <span>
                  <strong>Clean code</strong>
                  <small>Built with purpose</small>
                </span>
              </div>

              <span className="hero-stat-divider" />

              <div className="hero-mini-stat">
                <span className="hero-stat-symbol">
                  <Globe2 size={21} />
                </span>
                <span>
                  <strong>Web solutions</strong>
                  <small>From UI to API</small>
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.9, x: 35 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
          >
            <div className="hero-visual-topline">
             
              
            </div>

            <div className="hero-stage">
              <div className="hero-stage-grid" />
              <div className="hero-stage-glow" />
              <div className="hero-stage-aura" />

              <motion.div
                className="hero-portal hero-portal-back"
                animate={{ rotate: [0, 3, 0], scale: [1, 1.025, 1] }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="hero-portal hero-portal-front"
                animate={{ rotate: [0, -2, 0] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="hero-energy-orbit hero-energy-one" />
              <div className="hero-energy-orbit hero-energy-two" />

              <div className="hero-portrait-frame">
                <div className="hero-portrait-backlight" />

                <div className="hero-portrait">
                  <img
                    src="/images/profile/profile.jpg"
                    alt="Sufiyan Ali — Full-Stack Developer"
                  />
                </div>

                <div className="hero-portrait-shine" />
                <span className="hero-frame-corner corner-tl" />
                <span className="hero-frame-corner corner-tr" />
                <span className="hero-frame-corner corner-bl" />
                <span className="hero-frame-corner corner-br" />
              </div>

              <motion.div
                className="hero-tech-orbit hero-tech-python"
                animate={{ y: [0, -9, 0], rotate: [0, 3, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="hero-tech-glyph python-glyph">Py</span>
              </motion.div>

              <motion.div
                className="hero-tech-orbit hero-tech-react"
                animate={{ y: [0, 8, 0], rotate: [0, -5, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Orbit size={32} />
              </motion.div>

              <motion.div
                className="hero-tech-orbit hero-tech-js"
                animate={{ y: [0, -7, 0], rotate: [0, 4, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="hero-tech-glyph js-glyph">JS</span>
              </motion.div>

              <motion.div
                className="hero-tech-orbit hero-tech-database"
                animate={{ y: [0, 7, 0] }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Database size={25} />
              </motion.div>

              <div className="hero-energy-spark spark-one" />
              <div className="hero-energy-spark spark-two" />
              <div className="hero-energy-spark spark-three" />

             

             

             

              
            </div>

            <div className="hero-visual-caption">
           
              
              
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-bottom-panels"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.6 }}
        >
          <div className="hero-tech-panel">
            <div className="hero-tech-heading">
              <span className="hero-tech-overline">MY TOOLKIT</span>
              <span className="hero-tech-subtitle">
                Technologies I build with
              </span>
            </div>

            <div className="hero-tech-list">
              {technologies.map((tech, index) => (
                <motion.div
                  className="hero-tech-item"
                  key={tech.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.08 }}
                  whileHover={{ y: -5 }}
                >
                  <span className="hero-tech-number">{tech.number}</span>
                  <span className="hero-tech-icon">
                    <TechIcon type={tech.icon} />
                  </span>
                  <strong>{tech.name}</strong>
                  <span className="hero-tech-type">{tech.type}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="hero-capabilities">
            <div className="hero-tech-heading">
              <span className="hero-tech-overline">CAPABILITIES</span>
              <span className="hero-tech-subtitle">
                From interface to infrastructure
              </span>
            </div>

            <div className="hero-capability-list">
              {capabilities.map(({ icon: Icon, title, detail }, index) => (
                <motion.div
                  className="hero-capability"
                  key={title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <span className="hero-capability-icon">
                    <Icon size={20} />
                  </span>
                  <strong>{title}</strong>
                  <span className="hero-capability-detail">{detail}</span>
                  <span className="hero-capability-index">
                    0{index + 1}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
       
      </motion.a>
    </section>
  );
}

export default Hero;
