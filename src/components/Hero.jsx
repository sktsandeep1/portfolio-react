import { useEffect, useRef } from "react";
import sandeepImg from "/assets/sandeep.png";

export default function Hero() {
  const r = Array.from({ length: 7 }, () => useRef(null));

  useEffect(() => {
    r.forEach((ref, i) => {
      const el = ref.current;
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = i === 5 ? "scale(0.9)" : "translateY(30px)";
      setTimeout(
        () => {
          if (!el) return;
          el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
          el.style.opacity = "1";
          el.style.transform = i === 5 ? "scale(1)" : "translateY(0)";
        },
        300 + i * 120,
      );
    });
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid">
        {/* Text */}
        <div>
          <div
            ref={r[0]}
            className="section-label"
            style={{ color: "var(--accent-cyan)", marginBottom: 16 }}
          >
            // Hello, World
          </div>
          <h1 ref={r[1]} className="hero-h1">
            I'm{" "}
            <span
              className="gradient-text"
              style={{
                background:
                  "linear-gradient(135deg,var(--accent-blue),var(--accent-purple),var(--accent-cyan))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Sandeep
            </span>
          </h1>
          <div ref={r[2]} className="hero-role">
            Full Stack Developer & SEO Expert
          </div>
          <p ref={r[3]} className="hero-desc">
            Passionate about building scalable web applications and crafting
            elegant solutions to complex problems. Experienced in modern
            JavaScript frameworks, cloud infrastructure, and full-stack
            development.
          </p>
          <div ref={r[4]} className="hero-buttons">
            <button
              className="btn-primary"
              onClick={() => scrollTo("projects")}
            >
              View Projects
            </button>
            <button
              className="btn-secondary"
              style={{ padding: "14px 32px", borderRadius: 8, fontSize: 14 }}
              onClick={() => scrollTo("cta")}
            >
              Contact Me
            </button>
          </div>
          <div ref={r[6]} className="hero-stats">
            {[
              ["3+", "Years Experience"],
              ["15+", "Projects Built"],
              ["10+", "Tech Stack"],
            ].map(([num, label]) => (
              <div key={label}>
                <div
                  style={{
                    fontSize: 32,
                    fontWeight: 800,
                    letterSpacing: "-1px",
                    background:
                      "linear-gradient(135deg,var(--accent-blue),var(--accent-cyan))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {num}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--text-muted)",
                    marginTop: 4,
                    fontWeight: 500,
                    letterSpacing: "0.5px",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div ref={r[5]} className="hero-visual">
          <div className="hero-image-wrap">
            {["-12px", "-28px", "-44px"].map((inset, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  inset,
                  borderRadius: "50%",
                  border: `1px solid ${["rgba(74,144,217,0.2)", "rgba(139,92,246,0.12)", "rgba(6,182,212,0.08)"][i]}`,
                  animation: "ringPulse 4s ease-in-out infinite",
                  animationDelay: `${i * 1.3}s`,
                }}
              />
            ))}
            <img src={sandeepImg} alt="Sandeep" className="hero-img" />
            <div
              style={{
                position: "absolute",
                bottom: 20,
                right: -10,
                background: "var(--bg-card)",
                backdropFilter: "blur(12px)",
                border: "1px solid var(--border-color)",
                borderRadius: 20,
                padding: "8px 16px",
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 12,
                color: "var(--accent-green)",
                fontWeight: 500,
              }}
            >
              <div
                style={{
                  width: 7,
                  height: 7,
                  background: "var(--accent-green)",
                  borderRadius: "50%",
                  animation: "statusPulse 2s infinite",
                }}
              />
              Available for hire
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
