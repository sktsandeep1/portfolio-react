import { useState } from "react";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("sandeep@example.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section
      id="cta"
      style={{
        position: "relative",
        zIndex: 1,
        minHeight: "60vh",
        padding: "120px 60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
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
          // Let's Connect
        </div>
        <h2
          style={{
            fontSize: 48,
            fontWeight: 900,
            letterSpacing: "-2px",
            marginBottom: 20,
            lineHeight: 1.1,
          }}
        >
          Ready to build something{" "}
          <span
            style={{
              background:
                "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            amazing
          </span>{" "}
          together?
        </h2>
        <p
          style={{
            fontSize: 16,
            lineHeight: 1.7,
            color: "var(--text-secondary)",
            marginBottom: 40,
          }}
        >
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Let's turn your ideas into
          reality.
        </p>
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="mailto:sktsandeep1@gmail.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "16px 36px",
              background:
                "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
              color: "#fff",
              border: "none",
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
              textDecoration: "none",
              fontFamily: "Inter, sans-serif",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow =
                "0 12px 40px rgba(74,144,217,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            ✉ Say Hello
          </a>

          <button
            onClick={handleCopy}
            style={{
              padding: "16px 36px",
              background: "transparent",
              color: "var(--text-primary)",
              border: "1px solid var(--border-hover)",
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 500,
              cursor: "pointer",
              fontFamily: "Inter, sans-serif",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = "var(--accent-blue)";
              e.target.style.color = "var(--accent-blue)";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "var(--border-hover)";
              e.target.style.color = "var(--text-primary)";
            }}
          >
            {copied ? "Copied!" : "Copy Email"}
          </button>
        </div>

        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            marginTop: 32,
          }}
        >
          {[
            ["⟨/⟩", "GitHub"],
            ["in", "LinkedIn"],
            ["𝕏", "Twitter"],
            ["◎", "Portfolio"],
          ].map(([icon, title]) => (
            <a
              key={title}
              href="#"
              title={title}
              style={{
                width: 44,
                height: 44,
                borderRadius: 10,
                background: "var(--bg-card)",
                border: "1px solid var(--border-color)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--text-secondary)",
                textDecoration: "none",
                fontSize: 16,
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent-blue)";
                e.currentTarget.style.color = "var(--accent-blue)";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-color)";
                e.currentTarget.style.color = "var(--text-secondary)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        zIndex: 1,
        padding: "40px 60px",
        borderTop: "1px solid var(--border-color)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: 13, color: "var(--text-muted)" }}>
          Designed & Built by{" "}
          <a
            href="#"
            style={{ color: "var(--accent-blue)", textDecoration: "none" }}
          >
            Sandeep
          </a>
          — © 2026
        </div>
        <div style={{ display: "flex", gap: 24 }}>
          {[
            ["#hero", "Home"],
            ["#about", "About"],
            ["#projects", "Projects"],
            ["#cta", "Contact"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              style={{
                fontSize: 12,
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "var(--text-primary)";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "var(--text-muted)";
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
