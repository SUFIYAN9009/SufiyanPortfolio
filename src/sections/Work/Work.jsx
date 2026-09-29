import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";
import "./Work.css";

const projects = [
  {
    number: "01",
    category: "FULL STACK WEB APPLICATION",
    title: "E-Commerce",
    titleAccent: "Platform.",
    description:
      "A full-stack e-commerce application for browsing products, managing carts, placing orders, and handling products through an admin system.",
    technologies: [
      "Python",
      "Django",
      "React",
      "JavaScript",
      "REST API",
    ],
    type: "01",
    status: "IN DEVELOPMENT",
  },

  {
    number: "02",
    category: "CLIENT WEBSITE",
    title: "ALFA Lithium",
    titleAccent: "Batteries.",
    description:
      "A responsive business website built for ALFA Lithium Batteries to present its brand, products, and services through a clean digital experience.",
    technologies: [
      "React",
      "JavaScript",
      "CSS3",
      "Responsive UI",
    ],
    type: "02",
    status: "LIVE",
    liveUrl: "https://alfa-website-ecru.vercel.app",
    images: [
      {
        src: "/images/projects/home.jpg",
        label: "HOME",
      },
      {
        src: "/images/projects/about.jpg",
        label: "ABOUT",
      },
      {
        src: "/images/projects/engneer.jpg",
        label: "ENGINEER",
      },
      {
        src: "/images/projects/contact.jpg",
        label: "CONTACT",
      },
    ],
  },
];

function ProjectVisual({ project }) {
  const [currentImage, setCurrentImage] = useState(0);

  const images = project.images || [];

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  /* =====================================================
     E-COMMERCE PREVIEW
  ===================================================== */

  if (!images.length) {
    return (
      <div className="ecommerce-preview">

        <div className="ecommerce-grid"></div>

        <div className="ecommerce-top">
          <span>FULL STACK</span>
          <span>01 / 02</span>
        </div>

        <div className="ecommerce-center">
          <span className="ecommerce-outline">
            SHOP
          </span>

          <span className="ecommerce-solid">
            E-COMMERCE
          </span>
        </div>

        <div className="ecommerce-bottom">
          <span>PYTHON / DJANGO / REACT</span>
          <span>WEB APPLICATION</span>
        </div>

      </div>
    );
  }

  const activeImage = images[currentImage];

  /* =====================================================
     ALFA WEBSITE PREVIEW
  ===================================================== */

  return (
    <div className="browser-preview">

      <div className="browser-bar">

        <div className="browser-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="browser-address">
          <span className="browser-lock">●</span>
          alfa-lithium-batteries
        </div>

        <div className="browser-status">
          LIVE
        </div>

      </div>

      <div className="browser-screen">

        <AnimatePresence mode="wait">
          <motion.img
            key={activeImage.src}
            src={activeImage.src}
            alt={`ALFA Lithium Batteries ${activeImage.label} page`}
            initial={{
              opacity: 0,
              scale: 1.015,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          />
        </AnimatePresence>

        <div className="preview-info">
          <div>
            <span className="preview-project">
              ALFA LITHIUM BATTERIES
            </span>

            <span className="preview-page">
              {activeImage.label}
            </span>
          </div>

          <span className="preview-count">
            {String(currentImage + 1).padStart(2, "0")}
            {" / "}
            {String(images.length).padStart(2, "0")}
          </span>
        </div>

        <button
          type="button"
          className="preview-arrow preview-arrow-left"
          onClick={previousImage}
          aria-label="Previous screenshot"
        >
          <ArrowLeft size={15} />
        </button>

        <button
          type="button"
          className="preview-arrow preview-arrow-right"
          onClick={nextImage}
          aria-label="Next screenshot"
        >
          <ArrowRight size={15} />
        </button>

      </div>

      <div className="preview-thumbnails">

        <div className="preview-thumbnail-list">

          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              className={
                index === currentImage
                  ? "preview-thumbnail active"
                  : "preview-thumbnail"
              }
              onClick={() => setCurrentImage(index)}
              aria-label={`View ${image.label} screenshot`}
              aria-current={
                index === currentImage
                  ? "true"
                  : undefined
              }
            >
              <img
                src={image.src}
                alt=""
              />

              <span>{image.label}</span>
            </button>
          ))}

        </div>

      </div>
    </div>
  );
}

function Work() {
  return (
    <section className="work" id="work">

      <div className="work-container">

        {/* Section Header */}

        <motion.div
          className="work-header"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <div>

            <span className="work-label">
              SELECTED PROJECTS
            </span>

            <h2>
              WHAT I'VE
              <br />
              <span>BUILT.</span>
            </h2>

          </div>

          <p>
            A selection of real projects built with
            modern technologies and practical solutions.
          </p>

        </motion.div>

        {/* Projects */}

        <div className="projects">

          {projects.map((project, index) => (

            <motion.article
              className="project"
              key={project.number}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
              }}
            >

              <div className="project-number">
                {project.number}
              </div>

              {/* Project Preview */}

              <div
                className={`project-visual project-visual-${project.type}`}
              >
                <ProjectVisual
                  project={project}
                />
              </div>

              {/* Project Information */}

              <div className="project-info">

                <div className="project-meta">

                  <span className="project-category">
                    {project.category}
                  </span>

                  <span
                    className={`project-status project-status-${project.status
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    <span className="project-status-dot"></span>
                    {project.status}
                  </span>

                </div>

                <h3>
                  {project.title}
                  <br />
                  <span>
                    {project.titleAccent}
                  </span>
                </h3>

                <p>
                  {project.description}
                </p>

                <div className="project-tech">

                  {project.technologies.map(
                    (tech) => (
                      <span key={tech}>
                        {tech}
                      </span>
                    )
                  )}

                </div>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-live-link"
                    aria-label={`Open ${project.title} live website`}
                  >
                    VIEW LIVE SITE
                    <ExternalLink size={14} />
                  </a>
                )}

              </div>

            </motion.article>

          ))}

        </div>

        {/* Bottom */}

        <motion.div
          className="work-bottom"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >

          <span>
            MORE PROJECTS COMING SOON
          </span>

          <a href="#contact">
            START A PROJECT
            <span>↗</span>
          </a>

        </motion.div>

      </div>

    </section>
  );
}

export default Work;