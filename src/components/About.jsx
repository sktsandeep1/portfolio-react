import { useReveal } from "../hooks/useReveal";
export default function About() {
  const textRef = useReveal(0);
  const codeRef = useReveal(150);

  return (
    <section
      id="about"
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
          // About Me
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
          Turning ideas into{" "}
          <span
            style={{
              background:
                "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            reality
          </span>
        </h2>

        <div
          className="about-row-2"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start",
          }}
        >
          <div ref={textRef}>
            {[
              "I'm a Full Stack Developer and SEO Expert with a strong foundation in computer science and a passion for creating impactful software solutions. With expertise spanning front-end frameworks like React and Angular to back-end technologies like Node.js and Python, I thrive on building end-to-end applications.",
              "My journey in tech has equipped me with a deep understanding of software architecture, database design, cloud services, and DevOps practices. I believe in writing clean, maintainable code and following best practices to deliver robust applications.",
              "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or diving into the latest in AI and machine learning.",
            ].map((text, i) => (
              <p
                key={i}
                style={{
                  fontSize: 15,
                  lineHeight: 1.8,
                  color: "var(--text-secondary)",
                  marginBottom: 20,
                }}
              >
                {text}
              </p>
            ))}

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
                marginTop: 32,
              }}
            >
              {[
                ["Name", "Sandeep"],
                ["Role", "Full Stack Developer / SEO Expert"],
                ["Location", "India"],
                ["Education", "B.Tech in IT"],
              ].map(([label, value]) => (
                <InfoItem key={label} label={label} value={value} />
              ))}
            </div>
          </div>

          <div ref={codeRef} className="sandeep-config">
            <div
              style={{
                background: "rgba(15,15,25,0.8)",
                border: "1px solid var(--border-color)",
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "14px 20px",
                  borderBottom: "1px solid var(--border-color)",
                }}
              >
                {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                  <div
                    key={c}
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: c,
                    }}
                  />
                ))}
                <span
                  style={{
                    marginLeft: 12,
                    fontSize: 12,
                    color: "var(--text-muted)",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  sandeep.config.js
                </span>
              </div>
              <div
                style={{
                  padding: 24,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 13,
                  lineHeight: 1.9,
                  color: "var(--text-secondary)",
                }}
              >
                <span style={{ color: "#c678dd" }}>const</span>{" "}
                <span style={{ color: "#61afef" }}>developer</span> ={" "}
                <span style={{ color: "#e5c07b" }}>{"{"}</span>
                <br />
                &nbsp;&nbsp;<span style={{ color: "#61afef" }}>name</span>:{" "}
                <span style={{ color: "#98c379" }}>"Sandeep"</span>,<br />
                &nbsp;&nbsp;<span style={{ color: "#61afef" }}>role</span>:{" "}
                <span style={{ color: "#98c379" }}>"Full Stack Dev"</span>,
                <br />
                &nbsp;&nbsp;<span style={{ color: "#61afef" }}>languages</span>:
                [<br />
                {["JavaScript"].map((lang) => (
                  <span key={lang}>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span style={{ color: "#98c379" }}>"{lang}"</span>,<br />
                  </span>
                ))}
                &nbsp;&nbsp;],
                <br />
                &nbsp;&nbsp;<span style={{ color: "#61afef" }}>
                  passion
                </span>:{" "}
                <span style={{ color: "#98c379" }}>"Building things"</span>,
                <br />
                &nbsp;&nbsp;
                <span style={{ color: "#61afef" }}>coffee & chai</span>:{" "}
                <span style={{ color: "#d19a66" }}>Infinity</span>,
                <br />
                &nbsp;&nbsp;<span style={{ color: "#61afef" }}>
                  available
                </span>: <span style={{ color: "#c678dd" }}>true</span>
                <br />
                <span style={{ color: "#e5c07b" }}>{"}"}</span>;<br />
                <br />
                <span style={{ color: "#5c6370", fontStyle: "italic" }}>
                  // Let's build something amazing!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoItem({ label, value }) {
  return (
    <div
      style={{
        padding: "16px 20px",
        background: "var(--bg-card)",
        border: "1px solid var(--border-color)",
        borderRadius: 10,
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
          fontSize: 10,
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: "var(--text-muted)",
          marginBottom: 6,
          fontFamily: "'JetBrains Mono', monospace",
        }}
      >
        {label}
      </div>
      <div
        style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }}
      >
        {value}
      </div>
    </div>
  );
}
