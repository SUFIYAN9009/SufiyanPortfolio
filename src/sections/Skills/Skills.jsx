import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Wrench,
  ArrowUpRight,
} from "lucide-react";
import "./Skills.css";

const skillGroups = [
  {
    number: "01",
    title: "FRONTEND",
    icon: Code2,
    skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    number: "02",
    title: "BACKEND",
    icon: Server,
    skills: ["Python", "Django", "REST API", "Django REST Framework"],
  },
  {
    number: "03",
    title: "DATABASE",
    icon: Database,
    skills: ["MySQL", "SQLite", "PostgreSQL"],
  },
  {
    number: "04",
    title: "TOOLS",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "API Integration"],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">

        {/* Header */}
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="skills-label">02 / EXPERTISE</span>

            <h2>
              MY <span>STACK.</span>
            </h2>
          </div>

          <p>
            Technologies and tools I use to transform
            ideas into reliable digital products.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                className="skill-card"
                key={group.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                {/* Card Top */}
                <div className="skill-card-top">
                  <span className="skill-number">
                    {group.number}
                  </span>

                  <Icon
                    className="skill-icon"
                    size={22}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3>{group.title}</h3>

                {/* Skills */}
                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>

                {/* Bottom */}
                <div className="skill-card-bottom">
                  <span>TECHNOLOGY</span>
                  <ArrowUpRight size={15} />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Skills;