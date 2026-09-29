import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import "./Experience.css";

const experiences = [
  {
    number: "01",
    period: "2026",
    type: "INTERNSHIP",
    title: "Full Stack Web Developer",
    company: "PFD Corporation",
    description:
      "Worked on full-stack web development tasks using Python, Django, React and JavaScript. Contributed to an e-commerce web application and worked with Git-based development workflows.",
    technologies: [
      "Python",
      "Django",
      "React",
      "JavaScript",
      "REST API",
    ],
  },
  {
    number: "02",
    period: "2026",
    type: "CLIENT PROJECT",
    title: "Frontend Developer",
    company: "ALFA Lithium Batteries",
    description:
      "Designed and developed a responsive business website using React and JavaScript, focusing on clean UI, responsive layouts and a professional user experience.",
    technologies: [
      "React",
      "JavaScript",
      "CSS3",
      "Responsive UI",
    ],
    link: "https://alfa-website-ecru.vercel.app",
  },
];

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-container">

        <motion.div
          className="experience-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="experience-label">
              EXPERIENCE
            </span>

            <h2>
              WHERE I'VE
              <br />
              <span>WORKED.</span>
            </h2>
          </div>

          <p>
            Practical experience through internships and
            real-world client projects.
          </p>
        </motion.div>

        <div className="experience-list">
          {experiences.map((experience, index) => (
            <motion.article
              className="experience-item"
              key={experience.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <div className="experience-number">
                {experience.number}
              </div>

              <div className="experience-period">
                {experience.period}
              </div>

              <div className="experience-content">
                <div className="experience-meta">
                  <span>{experience.type}</span>
                </div>

                <h3>{experience.title}</h3>

                <h4>{experience.company}</h4>

                <p>{experience.description}</p>

                <div className="experience-tech">
                  {experience.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                {experience.link && (
                  <a
                    href={experience.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="experience-link"
                  >
                    VIEW PROJECT
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;