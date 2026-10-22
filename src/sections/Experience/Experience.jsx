import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
} from "lucide-react";
import "./Experience.css";

const experiences = [
  {
    number: "01",
    period: "2026",
    type: "INTERNSHIP",
    title: "Full Stack Web Developer",
    company: "PFD Corporation",
    description:
      "Contributed to full-stack development tasks, building web application features and gaining practical experience with modern development workflows.",
    technologies: [
      "Python",
      "Django",
      "React",
      "JavaScript",
      "REST API",
    ],
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
    technologies: [
      "React",
      "JavaScript",
      "CSS3",
      "Responsive Design",
    ],
    link: "https://alfa-website-ecru.vercel.app",
    icon: BriefcaseBusiness,
  },
];

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-grid" aria-hidden="true" />
      <div
        className="experience-glow experience-glow-one"
        aria-hidden="true"
      />
      <div
        className="experience-glow experience-glow-two"
        aria-hidden="true"
      />

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
            A look at the opportunities, projects and practical
            work that continue to shape my development journey.
          </p>
        </motion.div>

        <div className="experience-timeline">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;

            return (
              <motion.article
                className="experience-item"
                key={experience.number}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
              >
                <div className="experience-marker">
                  <span>{experience.number}</span>
                </div>

                <div className="experience-card">
                  <div className="experience-card-top">
                    <div className="experience-icon">
                      <Icon size={21} strokeWidth={1.7} />
                    </div>

                    <div className="experience-meta">
                      <span className="experience-type">
                        {experience.type}
                      </span>
                      <span className="experience-period">
                        {experience.period}
                      </span>
                    </div>

                    <ArrowUpRight
                      className="experience-corner-arrow"
                      size={20}
                    />
                  </div>

                  <h3>{experience.title}</h3>
                  <h4>{experience.company}</h4>

                  <p className="experience-description">
                    {experience.description}
                  </p>

                  <div className="experience-divider" />

                  <span className="experience-tech-label">
                    TECHNOLOGIES & SKILLS
                  </span>

                  <div className="experience-tech">
                    {experience.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  {experience.link && (
                    <a
                      href={experience.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="experience-link"
                    >
                      <span>Explore project</span>
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
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