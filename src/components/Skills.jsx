import { useReveal } from "../hooks/useReveal";

const SKILLS = [
  {
    icon: "⚛",
    type: "frontend",
    title: "Frontend",
    tags: [
      "React",
      "Next.js",
      "HTML/CSS",
      "Redux",
      "GSAP",
      "Three.js",
      "Tailwind CSS",
      "Bootstrap",
      "AntD",
    ],
  },
  {
    icon: "⚡",
    type: "backend",
    title: "Backend",
    tags: ["Node.js", "Express Js", "FastAPI", "REST APIs", "MVC"],
  },
  {
    icon: "◈",
    type: "database",
    title: "Databases",
    tags: ["MongoDB", "PostgreSQL"],
  },
  {
    icon: "☁",
    type: "devops",
    title: "Cloud & DevOps",
    tags: [
      "Docker",
      "CI/CD",
      "Git/GitHub",
      "Vercel",
      "Render",
      "Neon",
      "Supabase",
      "Firebase",
      "Prisma",
      "PuTTY",
      "WinSCP",
      "CPanel",
    ],
  },
  {
    icon: "⚙",
    type: "tools",
    title: "Tools & Testing",
    tags: [
      "VS Code",
      "Postman",
      "Webpack",
      "Figma",
      "MongoDB - Atlas, Compass",
    ],
  },
  {
    icon: "✦",
    type: "others",
    title: "Others",
    tags: ["Agile/Scrum", "GTM", "GSC", "Speed Optimization"],
  },
];

const ACCENT_MAP = {
  frontend: "var(--accent-blue)",
  backend: "var(--accent-purple)",
  database: "var(--accent-green)",
  devops: "#f59e0b",
  tools: "var(--accent-cyan)",
  other: "#ec4899",
};

function SkillCard({ skill, delay }) {
  const ref = useReveal(delay);
  const accent = ACCENT_MAP[skill.type];

  return (
    <div
      ref={ref}
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border-color)",
        borderRadius: 14,
        padding: 32,
        transition: "all 0.4s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--border-hover)";
        e.currentTarget.style.background = "var(--bg-card-hover)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border-color)";
        e.currentTarget.style.background = "var(--bg-card)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 20,
          marginBottom: 20,
          background: `${accent}1a`,
          color: accent,
        }}
      >
        {skill.icon}
      </div>
      <div
        style={{
          fontSize: 16,
          fontWeight: 700,
          marginBottom: 16,
          letterSpacing: "-0.3px",
        }}
      >
        {skill.title}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {skill.tags.map((tag) => (
          <span
            key={tag}
            style={{
              padding: "6px 14px",
              borderRadius: 6,
              fontSize: 12,
              fontWeight: 500,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
              color: "var(--text-secondary)",
              transition: "all 0.3s",
              fontFamily: "'JetBrains Mono', monospace",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = "var(--accent-blue)";
              e.target.style.color = "var(--accent-blue)";
              e.target.style.background = "rgba(74,144,217,0.08)";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "rgba(255,255,255,0.06)";
              e.target.style.color = "var(--text-secondary)";
              e.target.style.background = "rgba(255,255,255,0.04)";
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
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
          // Tech Stack
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
          Skills &
          <span
            style={{
              background:
                "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Technologies
          </span>
        </h2>
        <div
          className="skills-row"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.type} skill={skill} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
