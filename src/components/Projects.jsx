import { useReveal } from "../hooks/useReveal";
import ibarts from "../../public/assets/ibarts.png";
const PROJECTS = [
  {
    icon: "🛒",
    image: "ibarts",
    type: "fullstack",
    label: "MERN Stack",
    title: "Point of Sale",
    url: "https://pos.sandeep-kumar.in/",
    github: "https://github.com/sktsandeep1/food-app",
    gradient:
      "linear-gradient(135deg, rgba(74,144,217,0.1), rgba(139,92,246,0.1))",
    desc: "Built a responsive Point of Sale system tailored for restaurants and retail operations. It streamlines billing, inventory, and order management through a clean, user-friendly dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Redux"],
  },
  {
    icon: "🏥",
    type: "frontend",
    label: "Frontend",
    title: "Gameday Men's Health",
    url: "https://gamedaymenshealth.com/",
    gradient:
      "linear-gradient(135deg, rgba(6,182,212,0.1), rgba(16,185,129,0.1))",
    desc: "Built and enhanced scalable healthcare websites with responsive layouts, dynamic JavaScript/jQuery functionalities, performance optimization, and cross-browser compatibility.",
    tech: ["Html", "Css", "Javascript", "Gsap"],
  },
  {
    icon: "💻",
    type: "frontend",
    label: "Frontend",
    title: "IB Arts",
    url: "https://ibarts.co/",
    gradient:
      "linear-gradient(135deg, rgba(139,92,246,0.1), rgba(236,72,153,0.1))",
    desc: "Developed and maintained responsive corporate websites using HTML, CSS, JavaScript, PHP, and Particles.js, creating interactive user experiences, dynamic UI elements, and performance-optimized web pages.",
    tech: ["Html", "Css", "Javascript", "Wordpress", "Particles.js", "PHP"],
  },
  {
    icon: "📨",
    type: "frontend",
    label: "Frontend",
    title: "MailSetu",
    gradient:
      "linear-gradient(135deg, rgba(245,158,11,0.1), rgba(239,68,68,0.1))",
    desc: "AI-powered co-marketing platform that helps newsletter creators, SaaS founders, and brands discover partnership opportunities without sharing email lists.",
    tech: ["React", "React Router", "Api Integration", "Git & Github"],
  },
];

const LABEL_COLORS = {
  fullstack: "var(--accent-blue)",
  frontend: "var(--accent-cyan)",
  backend: "var(--accent-purple)",
  mobile: "var(--accent-green)",
};

function ProjectCard({ project, delay }) {
  const ref = useReveal(delay);

  return (
    <div
      ref={ref}
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border-color)",
        borderRadius: 14,
        overflow: "hidden",
        transition: "all 0.4s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--border-hover)";
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border-color)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div
        style={{
          height: 200,
          position: "relative",
          background: project.gradient,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ fontSize: 48 }}>{project.icon}</div>
      </div>
      <div style={{ padding: 28 }}>
        <div
          style={{
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: 10,
            color: LABEL_COLORS[project.type],
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          {project.label}
        </div>
        <div
          style={{
            fontSize: 20,
            fontWeight: 700,
            marginBottom: 10,
            letterSpacing: "-0.5px",
          }}
        >
          {project.title}
        </div>
        <div
          style={{
            fontSize: 13,
            lineHeight: 1.7,
            color: "var(--text-muted)",
            marginBottom: 20,
          }}
        >
          {project.desc}
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            marginBottom: 20,
          }}
        >
          {project.tech.map((t) => (
            <span
              key={t}
              style={{
                padding: "4px 10px",
                borderRadius: 4,
                fontSize: 11,
                background: "rgba(255,255,255,0.04)",
                color: "var(--text-secondary)",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",

            gap: 12,
          }}
        >
          {/* <a
            href={project.url}
            style={{
              fontSize: 12,
              color: "var(--accent-blue)",
              textDecoration: "none",
              fontWeight: 500,
              transition: "color 0.3s",
            }}
          >
            ↗ Live Demo
          </a> */}
          {/* <a
            href={project.github}
            style={{
              fontSize: 12,
              color: "var(--accent-blue)",
              textDecoration: "none",
              fontWeight: 500,
              transition: "color 0.3s",
            }}
          >
            ⟨/⟩ Source Code
          </a> */}

          {project.url ? (
            <a
              href={project.url}
              style={{
                fontSize: 12,
                color: "var(--accent-blue)",
                textDecoration: "none",
                fontWeight: 500,
                transition: "color 0.3s",
              }}
            >
              ↗ Live Demo
            </a>
          ) : (
            ""
          )}

          {project.github ? (
            <a
              href={project.github}
              style={{
                fontSize: 12,
                color: "var(--accent-blue)",
                textDecoration: "none",
                fontWeight: 500,
                transition: "color 0.3s",
              }}
            >
              ⟨/⟩ Source Code
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        position: "relative",
        zIndex: 1,
        minHeight: "100vh",
        padding: "120px 60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: 1200, width: "100%" }}>
        <div
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "var(--accent-blue)",
            marginBottom: 12,
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          // Portfolio
        </div>
        <h2
          style={{
            fontSize: 40,
            fontWeight: 800,
            letterSpacing: "-1.5px",
            marginBottom: 48,
            lineHeight: 1.1,
          }}
        >
          Featured
          <span
            style={{
              background:
                "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Projects
          </span>
        </h2>
        <div
          className="projects-row"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 28,
          }}
        >
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
