import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Wrench,
} from "lucide-react";
import "./Skills.css";

const skillGroups = [
  {
    number: "01",
    title: "FRONTEND",
    icon: Code2,
    description:
      "Building responsive and user-friendly interfaces.",
    skills: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    number: "02",
    title: "BACKEND",
    icon: Server,
    description:
      "Developing reliable server-side applications and APIs.",
    skills: [
      "Python",
      "Django",
      "REST API",
      "Django REST Framework",
    ],
  },
  {
    number: "03",
    title: "DATABASE",
    icon: Database,
    description:
      "Working with structured data and application databases.",
    skills: [
      "MySQL",
      "SQLite",
      "PostgreSQL",
    ],
  },
  {
    number: "04",
    title: "TOOLS",
    icon: Wrench,
    description:
      "Tools I use to build, manage and ship projects.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "API Integration",
    ],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        {/* Header */}
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="skills-label">WHAT I WORK WITH</span>

            <h2>
              MY <span>SKILLS.</span>
            </h2>
          </div>

          <p>
            A practical stack I use to build complete,
            responsive web applications from frontend
            to backend.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                className="skill-card"
                key={group.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
              >
                {/* Top */}
                <div className="skill-card-top">
                  <span className="skill-number">
                    {group.number}
                  </span>

                  <Icon
                    className="skill-icon"
                    size={21}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Content */}
                <div className="skill-card-content">
                  <h3>{group.title}</h3>

                  <p>{group.description}</p>

                  <div className="skill-list">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Skills;