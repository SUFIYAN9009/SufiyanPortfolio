import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDown,
  Code2,
  Database,
  Terminal,
  Sparkles,
  Activity,
  Globe2,
  Orbit,
  Braces,
} from "lucide-react";
import "./Hero.css";

const technologies = [
  { name: "Python", type: "Backend", badge: "Py", accent: "#3776ab" },
  { name: "Django", type: "Framework", badge: "dj", accent: "#44b78b" },
  { name: "React", type: "Frontend", icon: Orbit },
  { name: "JavaScript", type: "Language", badge: "JS", accent: "#f7df1e", badgeText: "#111" },
  { name: "REST APIs", type: "Integration", icon: Braces },
  { name: "MySQL", type: "Database", icon: Database },
];

const capabilities = [
  { icon: Code2, title: "Frontend", detail: "Interactive interfaces" },
  { icon: Terminal, title: "Backend", detail: "Logic & APIs" },
  { icon: Database, title: "Database", detail: "Data management" },
];

const floatingChips = [
  { text: "Python", badge: "Py", accent: "#3776ab", className: "chip-python", delay: 0 },
  { text: "React", badge: "Re", accent: "#61dafb", badgeText: "#0b1024", className: "chip-react", delay: 0.4 },
  { text: "JavaScript", badge: "JS", accent: "#f7df1e", badgeText: "#111", className: "chip-js", delay: 0.8 },
  { text: "MySQL", badge: "DB", accent: "#00758f", className: "chip-db", delay: 1.2 },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function TechIcon({ tech }) {
  if (tech.icon) {
    const Icon = tech.icon;
    return <Icon size={20} />;
  }
  return (
    <span
      className="tech-badge"
      style={{ background: tech.accent, color: tech.badgeText ?? "#fff" }}
    >
      {tech.badge}
    </span>
  );
}

function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero" id="home">
      <div className="hero-background" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="hero-glow hero-glow-three" />
      </div>

      <div className="hero-container">
        <div className="hero-topline">
          <span>Portfolio &middot; 2026</span>
          <span className="hero-topline-right">
            <Activity size={14} />
            Available for work
          </span>
        </div>

        <div className="hero-main">
          <motion.div
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div className="hero-status" variants={reveal}>
              <span className="hero-status-dot" />
              Full-Stack Web Developer
            </motion.div>

            <motion.p className="hero-intro" variants={reveal}>
              Hello, I'm <span>Sufiyan Ali</span>
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
              JavaScript, combining thoughtful design, reliable backend
              systems, and clean code.
            </motion.p>

            <motion.div className="hero-actions" variants={reveal}>
              <a href="#work" className="hero-primary-btn">
                Explore My Work
                <ArrowUpRight size={19} />
              </a>
              <a href="#contact" className="hero-secondary-btn">
                Let's Talk
                <span className="hero-btn-arrow">&#8599;</span>
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
                  <Globe2 size={20} />
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
            initial={{ opacity: 0, scale: 0.92, x: 35 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
          >
            <div className="hero-stage">
              <div className="hero-stage-aura" />
              <div className="hero-ring hero-ring-one" />
              <div className="hero-ring hero-ring-two" />

              <div className="hero-portrait-frame">
                <div className="hero-portrait">
                  <img
                    src="/images/profile/profile.jpg"
                    alt="Sufiyan Ali, Full-Stack Web Developer"
                  />
                </div>
              </div>

              {floatingChips.map((chip) => (
                <motion.div
                  key={chip.text}
                  className={`hero-chip ${chip.className}`}
                  animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: chip.delay,
                  }}
                >
                  <span
                    className="chip-badge"
                    style={{ background: chip.accent, color: chip.badgeText ?? "#fff" }}
                  >
                    {chip.badge}
                  </span>
                  {chip.text}
                </motion.div>
              ))}
            </div>

            <div className="hero-visual-caption">
              <span className="hero-live-dot" />
              Open to new projects
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-bottom-panels"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.6 }}
        >
          <div className="hero-glass">
            <div className="hero-panel-heading">
              <span className="hero-overline">My Toolkit</span>
              <span className="hero-subtitle">Technologies I build with</span>
            </div>

            <div className="hero-tech-list">
              {technologies.map((tech, index) => (
                <motion.div
                  className="hero-tech-item"
                  key={tech.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.08 }}
                  whileHover={reduceMotion ? undefined : { y: -4 }}
                >
                  <span className="hero-tech-number">0{index + 1}</span>
                  <span className="hero-tech-icon">
                    <TechIcon tech={tech} />
                  </span>
                  <strong>{tech.name}</strong>
                  <span className="hero-tech-type">{tech.type}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="hero-glass">
            <div className="hero-panel-heading">
              <span className="hero-overline">Capabilities</span>
              <span className="hero-subtitle">From interface to infrastructure</span>
            </div>

            <div className="hero-capability-list">
              {capabilities.map(({ icon: Icon, title, detail }, index) => (
                <motion.div
                  className="hero-capability"
                  key={title}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <span className="hero-capability-icon">
                    <Icon size={20} />
                  </span>
                  <strong>{title}</strong>
                  <span className="hero-capability-detail">{detail}</span>
                  <span className="hero-capability-index">0{index + 1}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero-scroll"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: [0, 6, 0] }}
        transition={{
          opacity: { delay: 1.2 },
          y: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <span>Scroll</span>
        <ArrowDown size={16} />
      </motion.a>
    </section>
  );
}

export default Hero;