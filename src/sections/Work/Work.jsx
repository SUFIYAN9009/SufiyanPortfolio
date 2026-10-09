
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { useEffect, useState } from "react";
import "./Work.css";

const projects = [
  {
    slug: "e-commerce",
    number: "01",
    category: "FULL STACK WEB APPLICATION",
    title: "E-Commerce",
    titleAccent: "Platform.",
    previewName: "ecommerce-shop",
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
    images: [
      { src: "/images/projects/ecommerce.jpg", label: "HOME" },
      { src: "/images/projects/ecommerce1.jpg", label: "PRODUCTS" },
      { src: "/images/projects/ecommerce2.jpg", label: "STORY" },
      { src: "/images/projects/ecommerce3.jpg", label: "SIGN UP" },
      { src: "/images/projects/ecommerce4.jpg", label: "ADMIN PANEL" },
      {
        src: "/images/projects/ecommerce5.jpg",
        label: "PRODUCT MANAGEMENT",
      },
      { src: "/images/projects/ecommerce6.jpg", label: "ADD PRODUCT" },
    ],
  },
  {
    slug: "alfa-lithium",
    number: "02",
    category: "CLIENT WEBSITE",
    title: "ALFA Lithium",
    titleAccent: "Batteries.",
    previewName: "alfa-lithium-batteries",
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
      { src: "/images/projects/home.jpg", label: "HOME" },
      { src: "/images/projects/about.jpg", label: "ABOUT" },
      { src: "/images/projects/engneer.jpg", label: "ENGINEER" },
      { src: "/images/projects/contact.jpg", label: "CONTACT" },
    ],
  },
];

const AUTO_SLIDE_DELAY = 5000;

function ProjectVisual({ project }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [failedImages, setFailedImages] = useState([]);

  const images = project.images || [];
  const activeImage = images[currentImage];
  const imageError = activeImage
    ? failedImages.includes(activeImage.src)
    : false;

  useEffect(() => {
    setCurrentImage(0);
    setFailedImages([]);
  }, [project.slug]);

  const nextImage = () => {
    if (!images.length) return;

    setCurrentImage((current) => (current + 1) % images.length);
  };

  const previousImage = () => {
    if (!images.length) return;

    setCurrentImage(
      (current) => (current - 1 + images.length) % images.length
    );
  };

  const selectImage = (index) => {
    setCurrentImage(index);
  };

  const handleImageError = (src) => {
    setFailedImages((current) =>
      current.includes(src) ? current : [...current, src]
    );
  };

  if (!images.length) {
    return (
      <div className="ecommerce-preview">
        <div className="ecommerce-grid" />

        <div className="ecommerce-top">
          <span>FULL STACK</span>
          <span>
            {project.number} / {String(projects.length).padStart(2, "0")}
          </span>
        </div>

        <div className="ecommerce-center">
          <span className="ecommerce-outline">SHOP</span>
          <span className="ecommerce-solid">E-COMMERCE</span>
        </div>

        <div className="ecommerce-bottom">
          <span>PYTHON / DJANGO / REACT</span>
          <span>WEB APPLICATION</span>
        </div>
      </div>
    );
  }

  return (
    <div className="browser-preview">
      <div className="browser-bar">
        <div className="browser-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="browser-address">
          <span className="browser-lock" aria-hidden="true">
            ●
          </span>
          {project.previewName || project.slug}
        </div>

        <div className="browser-status">{project.status === "LIVE" ? "LIVE" : "PREVIEW"}</div>
      </div>

      <div className="browser-screen">
        {activeImage && !imageError ? (
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={activeImage.src}
              className="project-screenshot"
              src={activeImage.src}
              alt={`${project.title} ${activeImage.label} screenshot`}
              initial={{ opacity: 0, x: 18, scale: 1.01 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -18 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onError={() => handleImageError(activeImage.src)}
            />
          </AnimatePresence>
        ) : (
          <div className="preview-image-fallback">
            <span>
              {project.title} {project.titleAccent}
            </span>
            <span>
              {activeImage?.label || "SCREENSHOT"} PREVIEW UNAVAILABLE
            </span>
            <span className="preview-fallback-hint">
              Check the image filename and public folder path.
            </span>
          </div>
        )}

        {activeImage && (
          <div className="preview-info">
            <div>
              <span className="preview-project">
                {project.title} {project.titleAccent}
              </span>
              <span className="preview-page">{activeImage.label}</span>
            </div>

            <span className="preview-count">
              {String(currentImage + 1).padStart(2, "0")}
              {" / "}
              {String(images.length).padStart(2, "0")}
            </span>
          </div>
        )}

        <button
          type="button"
          className="preview-arrow preview-arrow-left"
          onClick={previousImage}
          aria-label={`Previous ${project.title} screenshot`}
          disabled={images.length < 2}
        >
          <ArrowLeft size={15} />
        </button>

        <button
          type="button"
          className="preview-arrow preview-arrow-right"
          onClick={nextImage}
          aria-label={`Next ${project.title} screenshot`}
          disabled={images.length < 2}
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
              onClick={() => selectImage(index)}
              aria-label={`View ${image.label} screenshot`}
              aria-pressed={index === currentImage}
            >
              <img
                src={image.src}
                alt=""
                loading="lazy"
                onError={() => handleImageError(image.src)}
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
  const [activeProject, setActiveProject] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const project = projects[activeProject];

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updateMotionPreference = () => {
      setReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  const showProject = (index) => {
    const nextIndex = (index + projects.length) % projects.length;

    if (nextIndex === activeProject) return;

    setDirection(nextIndex > activeProject ? 1 : -1);
    setActiveProject(nextIndex);
  };

  const showPrevious = () => {
    setDirection(-1);
    setActiveProject(
      (current) => (current - 1 + projects.length) % projects.length
    );
  };

  const showNext = () => {
    setDirection(1);
    setActiveProject((current) => (current + 1) % projects.length);
  };

  useEffect(() => {
    if (isPaused || reducedMotion || projects.length < 2) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setDirection(1);
      setActiveProject(
        (current) => (current + 1) % projects.length
      );
    }, AUTO_SLIDE_DELAY);

    return () => window.clearInterval(timer);
  }, [isPaused, reducedMotion]);

  const handleFocus = () => setIsPaused(true);

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsPaused(false);
    }
  };

  return (
    <section className="work" id="work">
      <div className="work-container">
        <motion.div
          className="work-header"
          initial={reducedMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reducedMotion ? 0 : 0.6 }}
        >
          <div>
            <span className="work-label">SELECTED PROJECTS</span>
            <h2>
              WHAT I'VE
              <br />
              <span>BUILT.</span>
            </h2>
          </div>

          <p>
            A selection of real projects built with modern
            technologies and practical solutions.
          </p>
        </motion.div>

        <div
          className="projects"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={handleFocus}
          onBlurCapture={handleBlur}
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.article
              className="project"
              key={project.number}
              initial={
                reducedMotion
                  ? { opacity: 1 }
                  : { opacity: 0, x: direction * 100 }
              }
              animate={{ opacity: 1, x: 0 }}
              exit={
                reducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, x: direction * -100 }
              }
              transition={{
                x: {
                  duration: reducedMotion ? 0 : 0.55,
                  ease: [0.22, 1, 0.36, 1],
                },
                opacity: {
                  duration: reducedMotion ? 0 : 0.35,
                },
              }}
            >
              <div className="project-number">{project.number}</div>

              <div className={`project-visual project-visual-${project.type}`}>
                <ProjectVisual project={project} />
              </div>

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
                    <span className="project-status-dot" />
                    {project.status}
                  </span>
                </div>

                <h3>
                  {project.title}
                  <br />
                  <span>{project.titleAccent}</span>
                </h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-live-link"
                    aria-label={`Open ${project.title} ${project.titleAccent} live website`}
                  >
                    VIEW LIVE SITE
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        <div className="project-carousel-controls">
          <div className="project-carousel-count" aria-live="polite">
            <span>{String(activeProject + 1).padStart(2, "0")}</span>
            <span className="project-carousel-divider">/</span>
            <span>{String(projects.length).padStart(2, "0")}</span>
          </div>

          <div
            className="project-carousel-dots"
            role="group"
            aria-label="Choose a project"
          >
            {projects.map((item, index) => (
              <button
                key={item.number}
                type="button"
                className={
                  index === activeProject
                    ? "project-carousel-dot active"
                    : "project-carousel-dot"
                }
                onClick={() => showProject(index)}
                aria-label={`Show project ${index + 1}: ${item.title} ${item.titleAccent}`}
                aria-pressed={index === activeProject}
              />
            ))}
          </div>

          <div className="project-carousel-arrows">
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous project"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              type="button"
              onClick={showNext}
              aria-label="Next project"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <motion.div
          className="work-bottom"
          initial={reducedMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : 0.6 }}
        >
          <span>MORE PROJECTS COMING SOON</span>
          <a href="#contact">
            START A PROJECT
            <span aria-hidden="true">↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Work;

