import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
} from "lucide-react";
import "./Experience.css";

const INTERVAL = 3000;

const experiences = [
  {
    number: "01",
    period: "2026",
    type: "INTERNSHIP",
    title: "Full Stack Web Developer",
    company: "PFD Corporation",
    description:
      "Contributed to full-stack development tasks, building web application features and gaining practical experience with modern development workflows.",
    technologies: ["Python", "Django", "React", "JavaScript", "REST API"],
    icon: Code2,
  },
  {
    number: "02",
    period: "2026",
    type: "CLIENT PROJECT",
    title: "Frontend Developer",
    company: "ALFA Lithium Batteries",
    description:
      "Developed a responsive business website with a clean interface, adaptable layouts and a professional user experience across screen sizes.",
    technologies: ["React", "JavaScript", "CSS3", "Responsive Design"],
    link: "https://alfa-website-ecru.vercel.app",
    icon: BriefcaseBusiness,
  },
];

function Experience() {
  const count = experiences.length;
  const step = 360 / count;

  // "turn" only counts up, so the orbit always rotates forward
  const [turn, setTurn] = useState(0);
  const [paused, setPaused] = useState(false);

  const active = ((turn % count) + count) % count;
  const current = experiences[active];

  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Auto-rotate every 3 seconds. The timer restarts on every change.
  useEffect(() => {
    if (paused || reduceMotion) return undefined;
    const timer = setInterval(() => setTurn((t) => t + 1), INTERVAL);
    return () => clearInterval(timer);
  }, [paused, reduceMotion, turn]);

  const goTo = (index) => {
    const diff = (index - active + count) % count;
    if (diff !== 0) setTurn((t) => t + diff);
  };

  return (
    <section className="experience" id="experience">
      <div className="experience-grid" aria-hidden="true" />
      <div className="experience-glow experience-glow-one" aria-hidden="true" />
      <div className="experience-glow experience-glow-two" aria-hidden="true" />

      <div className="experience-container">
        <motion.div
          className="experience-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <div className="experience-heading">
            <span className="experience-label">
              <span className="experience-label-dot" />
              EXPERIENCE & WORK
            </span>

            <h2>
              Building through
              <br />
              <span>real experience.</span>
            </h2>
          </div>

          <p className="experience-intro">
            A look at the opportunities, projects and practical work that
            continue to shape my development journey.
          </p>
        </motion.div>

        <div
          className="exp-stage"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {/* Circular orbit */}
          <div className="exp-orbit-wrap">
            <div className="exp-ring exp-ring-solid" aria-hidden="true" />
            <div className="exp-ring exp-ring-dashed" aria-hidden="true" />

            <div
              className="exp-orbit"
              style={{ "--o": `${-turn * step}deg` }}
            >
              {experiences.map((item, index) => {
                const Icon = item.icon;
                const isActive = index === active;

                return (
                  <div
                    key={item.number}
                    className="exp-spoke"
                    style={{ "--a": `${index * step}deg` }}
                  >
                    <button
                      type="button"
                      className={`exp-node${isActive ? " is-active" : ""}`}
                      onClick={() => goTo(index)}
                      aria-label={`Show ${item.title}`}
                      aria-pressed={isActive}
                    >
                      <span
                        className="exp-node-inner"
                        style={{ "--c": `${(turn - index) * step}deg` }}
                      >
                        <Icon size={20} strokeWidth={1.8} />
                      </span>
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="exp-core">
              <svg className="exp-progress" viewBox="0 0 120 120" aria-hidden="true">
                <circle className="exp-progress-track" cx="60" cy="60" r="56" />
                <circle
                  key={turn}
                  className="exp-progress-bar"
                  cx="60"
                  cy="60"
                  r="56"
                  style={{
                    animationDuration: `${INTERVAL}ms`,
                    animationPlayState: paused ? "paused" : "running",
                  }}
                />
              </svg>

              <span className="exp-core-number" key={`n-${active}`}>
                {current.number}
              </span>
              <span className="exp-core-label" key={`p-${active}`}>
                {current.period}
              </span>
            </div>
          </div>

          {/* Details card */}
          <article className="experience-card exp-detail" key={active}>
            <div className="experience-card-top">
              <div className="experience-icon">
                <current.icon size={21} strokeWidth={1.7} />
              </div>

              <div className="experience-meta">
                <span className="experience-type">{current.type}</span>
                <span className="experience-period">{current.period}</span>
              </div>

              <ArrowUpRight className="experience-corner-arrow" size={20} />
            </div>

            <h3>{current.title}</h3>
            <h4>{current.company}</h4>

            <p className="experience-description">{current.description}</p>

            <div className="experience-divider" />

            <span className="experience-tech-label">TECHNOLOGIES & SKILLS</span>

            <div className="experience-tech">
              {current.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            {current.link && (
              <a
                href={current.link}
                target="_blank"
                rel="noopener noreferrer"
                className="experience-link"
              >
                <span>Explore project</span>
                <ExternalLink size={15} />
              </a>
            )}
          </article>
        </div>

        {/* Controls */}
        <div className="exp-controls">
          <div className="exp-counter">
            <strong>{String(active + 1).padStart(2, "0")}</strong>
            <span>/ {String(count).padStart(2, "0")}</span>
          </div>

          <div className="exp-dots">
            {experiences.map((item, index) => (
              <button
                key={item.number}
                type="button"
                className={`exp-dot${index === active ? " is-active" : ""}`}
                onClick={() => goTo(index)}
                aria-label={`Go to ${item.title}`}
              >
                {index === active && (
                  <span
                    key={turn}
                    className="exp-dot-fill"
                    style={{
                      animationDuration: `${INTERVAL}ms`,
                      animationPlayState: paused ? "paused" : "running",
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          className="experience-footer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <span className="experience-footer-line" />
          <p>Every project is another opportunity to grow.</p>
          <a href="#contact" aria-label="Contact me">
            Let's connect <ArrowUpRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;