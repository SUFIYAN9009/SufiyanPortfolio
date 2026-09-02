import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import "./Work.css";

const projects = [
  {
    number: "01",
    category: "FULL STACK DEVELOPMENT",
    title: "E-Commerce",
    titleAccent: "Platform.",
    description:
      "A complete e-commerce platform designed with a modern shopping experience, product management, customer interactions, and a scalable backend architecture.",
    technologies: [
      "Python",
      "Django",
      "React",
      "JavaScript",
      "REST API",
    ],
    type: "01",
  },
  {
    number: "02",
    category: "CLIENT PROJECT",
    title: "ALFA Lithium",
    titleAccent: "Batteries.",
    description:
      "A premium responsive business website for ALFA Lithium Batteries, focused on clean presentation, product visibility, and a professional brand experience.",
    technologies: [
      "React",
      "JavaScript",
      "CSS3",
      "Responsive UI",
    ],
    type: "02",
  },
];

function Work() {
  return (
    <section className="work" id="work">
      <div className="work-container">

        {/* Header */}
        <motion.div
          className="work-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="work-label">SELECTED WORK</span>

            <h2>
              BUILT TO
              <br />
              <span>MATTER.</span>
            </h2>
          </div>

          <p>
            A selection of projects where design,
            development, and problem-solving come together.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="projects">

          {projects.map((project, index) => (
            <motion.article
              className="project"
              key={project.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
            >

              {/* Project Number */}
              <div className="project-number">
                {project.number}
              </div>

              {/* Project Visual */}
              <div className={`project-visual project-visual-${project.type}`}>

                <div className="visual-grid"></div>

                <div className="visual-content">

                  <span className="visual-label">
                    {project.type === "01"
                      ? "E-COMMERCE SYSTEM"
                      : "ALFA / ENERGY"}
                  </span>

                  <div className="visual-center">
                    <span>
                      {project.type === "01" ? "SHOP" : "ALFA"}
                    </span>
                  </div>

                  <div className="visual-corner">
                    2026
                  </div>

                </div>
              </div>

              {/* Project Information */}
              <div className="project-info">

                <div className="project-category">
                  {project.category}
                </div>

                <h3>
                  {project.title}
                  <br />
                  <span>{project.titleAccent}</span>
                </h3>

                <p>{project.description}</p>

                {/* Technologies */}
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                {/* Links */}
                <div className="project-links">

                  <a
                    href="https://github.com/SUFIYAN9009"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    VIEW CODE
                    <ArrowUpRight size={16} />
                  </a>

                  <a
                    href="#contact"
                    className="project-link project-link-muted"
                  >
                    PROJECT DETAILS
                    <ExternalLink size={14} />
                  </a>

                </div>

              </div>

            </motion.article>
          ))}

        </div>

        {/* Bottom */}
        <motion.div
          className="work-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span>MORE PROJECTS COMING SOON</span>

          <a href="#contact">
            START A PROJECT
            <ArrowUpRight size={16} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default Work;