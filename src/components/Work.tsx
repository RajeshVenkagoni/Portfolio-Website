import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";

const projects = [
  {
    title: "IT Asset Tracker",
    category: "Asset Management Dashboard",
    tools: "React, Django REST, PostgreSQL, Tailwind CSS",
    image: "/images/project1.png",
    live: "https://asset-tracker-five-mauve.vercel.app",
    github: "https://github.com/RajeshVenkagoni/it-asset-tracker",
  },
  {
    title: "Invoice & Expense Manager",
    category: "Financial Management",
    tools: "React, Django REST, PostgreSQL, ReportLab PDF",
    image: "/images/project2.png",
    live: "https://invoice-manager-drab.vercel.app",
    github: "https://github.com/RajeshVenkagoni/invoice-manager",
  },
  {
    title: "Employee Directory & HR Portal",
    category: "HR Management",
    tools: "React, Django REST, PostgreSQL, JWT + RBAC",
    image: "/images/project3.png",
    live: "https://hr-portal.vercel.app",
    github: "https://github.com/RajeshVenkagoni/hr-portal",
  },
  {
    title: "Real-Time Support Tickets",
    category: "Helpdesk System",
    tools: "React, Django Channels, WebSocket, Redis",
    image: "/images/project4.png",
    live: "https://support-tickets-lilac.vercel.app",
    github: "https://github.com/RajeshVenkagoni/support-tickets",
  },
  {
    title: "AI Resume Analyzer",
    category: "AI-Powered Tool",
    tools: "React, Flask, Claude API, pdfplumber",
    image: "/images/project5.png",
    live: "https://resume-analyzer.vercel.app",
    github: "https://github.com/RajeshVenkagoni/ai-resume-analyzer",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        <div className="carousel-links">
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-cursor="disable"
                            className="carousel-link"
                          >
                            Live <MdArrowOutward />
                          </a>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-cursor="disable"
                            className="carousel-link"
                          >
                            GitHub <MdArrowOutward />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
