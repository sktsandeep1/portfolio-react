import { useReveal, useRevealX } from "../hooks/useReveal";

const EXPERIENCE = [
  {
    date: "Jan 2023 — Apr 2026",
    role: "Web Developer & SEO Expert",
    company: "Tech Solutions Inc.",
    location: "📍 Kolkata",
    points: [
      "Developed and maintained responsive web applications using HTML, CSS, JavaScript, and React.js",
      "Built reusable UI components and interactive user interfaces for improved user experience",
      "Integrated frontend applications with backend APIs using Node.js and Express.js",
      "Worked with MongoDB and PostgreSQL for database management and CRUD operations",
      "Implemented responsive designs using Bootstrap, Tailwind CSS, and Ant Design",
      "Improved website performance, accessibility, responsiveness, and cross-browser compatibility",
      "Debugged and resolved frontend and backend issues to enhance application stability",
      "Used Git and GitHub for version control and collaborative development workflows",
      "Tested APIs and handled request/response debugging using Postman",
      "Collaborated with team members and stakeholders to implement new features and UI enhancements",
    ],
  },
  {
    date: "2016 — 2022",
    role: "Coach / Player",
    company: "AIKF",
    location: "📍 Madhya Pradesh",
    points: ["Coach ", "Athlete"],
  },
  // {
  //   date: '2021 — 2022',
  //   role: 'Frontend Developer (Freelance)',
  //   company: 'Various Clients',
  //   location: '📍 Remote',
  //   points: [
  //     'Designed and developed 10+ responsive websites for small businesses and startups',
  //     'Implemented pixel-perfect UIs from Figma designs using React and Tailwind CSS',
  //     'Integrated third-party APIs including Stripe, Firebase, and Google Maps',
  //     'Achieved 95+ Lighthouse performance scores across all projects',
  //   ]
  // }
];

function TimelineItem({ exp, delay }) {
  const ref = useRevealX(delay);
  return (
    <div
      ref={ref}
      style={{ position: "relative", paddingLeft: 48, marginBottom: 56 }}
    >
      <div
        style={{
          position: "absolute",
          left: -5,
          top: 0,
          width: 11,
          height: 11,
          borderRadius: "50%",
          background: "var(--accent-blue)",
          boxShadow: "0 0 20px rgba(74,144,217,0.4)",
        }}
      />
      <div
        style={{
          fontSize: 12,
          fontWeight: 600,
          color: "var(--accent-blue)",
          marginBottom: 8,
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: "1px",
        }}
      >
        {exp.date}
      </div>
      <div
        style={{
          background: "var(--bg-card)",
          border: "1px solid var(--border-color)",
          borderRadius: 12,
          padding: 28,
          transition: "all 0.3s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "var(--border-hover)";
          e.currentTarget.style.background = "var(--bg-card-hover)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--border-color)";
          e.currentTarget.style.background = "var(--bg-card)";
        }}
      >
        <div
          style={{
            fontSize: 18,
            fontWeight: 700,
            marginBottom: 4,
            letterSpacing: "-0.3px",
          }}
        >
          {exp.role}
        </div>
        <div
          style={{
            fontSize: 14,
            color: "var(--accent-purple)",
            fontWeight: 500,
            marginBottom: 4,
          }}
        >
          {exp.company}
        </div>
        <div
          style={{
            fontSize: 12,
            color: "var(--text-muted)",
            marginBottom: 16,
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          {exp.location}
        </div>
        <ul style={{ listStyle: "none" }}>
          {exp.points.map((point, i) => (
            <li
              key={i}
              style={{
                fontSize: 13,
                lineHeight: 1.8,
                color: "var(--text-secondary)",
                marginBottom: 8,
                paddingLeft: 16,
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  color: "var(--accent-blue)",
                  fontSize: 14,
                }}
              >
                ▹
              </span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function EduCard({ children, delay }) {
  const ref = useReveal(delay);
  return (
    <div
      ref={ref}
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border-color)",
        borderRadius: 12,
        padding: 28,
        transition: "all 0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--border-hover)";
        e.currentTarget.style.background = "var(--bg-card-hover)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border-color)";
        e.currentTarget.style.background = "var(--bg-card)";
      }}
    >
      {children}
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
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
          // Career Journey
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
          Work{" "}
          <span
            style={{
              background:
                "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Experience
          </span>
        </h2>

        {/* Timeline */}
        <div style={{ position: "relative", maxWidth: 800, margin: "0 auto" }}>
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: 1,
              height: "100%",
              background:
                "linear-gradient(to bottom, var(--accent-blue), var(--accent-purple), transparent)",
            }}
          />
          {EXPERIENCE.map((exp, i) => (
            <TimelineItem key={exp.role} exp={exp} delay={i * 150} />
          ))}
        </div>

        {/* Education */}
        {/* <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 24,
            marginTop: 48,
          }}
        >
          <EduCard delay={0}>
            <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>
              🎓 B.Tech in Computer Science & Engineering
            </div>
            <div
              style={{
                fontSize: 14,
                color: "var(--accent-purple)",
                marginBottom: 4,
              }}
            >
              University of Technology
            </div>
            <div
              style={{
                fontSize: 12,
                color: "var(--text-muted)",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              2019 — 2023
            </div>
            <div
              style={{
                marginTop: 8,
                fontSize: 13,
                color: "var(--accent-green)",
                fontWeight: 600,
              }}
            >
              CGPA: 8.5 / 10
            </div>
          </EduCard>
          <EduCard delay={120}>
            <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>
              📜 Certifications
            </div>
            <div
              style={{
                fontSize: 14,
                color: "var(--text-secondary)",
                marginBottom: 4,
                lineHeight: 1.8,
              }}
            >
              AWS Certified Cloud Practitioner
              <br />
              Meta Front-End Developer Certificate
              <br />
              MongoDB Associate Developer
            </div>
            <div
              style={{
                fontSize: 12,
                color: "var(--text-muted)",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              2022 — 2024
            </div>
          </EduCard>
        </div> */}
      </div>
    </section>
  );
}
