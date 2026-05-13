import { useEffect, useRef } from "react";
import sandeepImg from "/assets/sandeep.png";

export default function Hero() {
  const greetingRef = useRef(null);
  const h1Ref = useRef(null);
  const roleRef = useRef(null);
  const descRef = useRef(null);
  const btnsRef = useRef(null);
  const visualRef = useRef(null);
  const statsRef = useRef(null);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    const els = [
      greetingRef,
      h1Ref,
      roleRef,
      descRef,
      btnsRef,
      visualRef,
      statsRef,
    ];
    els.forEach((ref, i) => {
      if (ref.current) {
        ref.current.style.opacity = "0";
        ref.current.style.transform =
          ref === visualRef ? "scale(0.9)" : "translateY(30px)";
        setTimeout(
          () => {
            if (ref.current) {
              ref.current.style.transition =
                "opacity 0.7s ease, transform 0.7s ease";
              ref.current.style.opacity = "1";
              ref.current.style.transform =
                ref === visualRef ? "scale(1)" : "translateY(0)";
            }
          },
          300 + i * 120,
        );
      }
    });
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        paddingTop: 80,
        position: "relative",
        zIndex: 1,
        display: "flex",
        alignItems: "center",
        padding: "80px 60px 60px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
          width: "100%",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* Text */}
        <div>
          <div
            ref={greetingRef}
            style={{
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--accent-cyan)",
              marginBottom: 16,
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            // Hello, World
          </div>

          <h1
            ref={h1Ref}
            style={{
              fontSize: 64,
              fontWeight: 900,
              letterSpacing: "-3px",
              lineHeight: 1.05,
              marginBottom: 8,
            }}
          >
            I'm{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, var(--accent-blue), var(--accent-purple), var(--accent-cyan))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Sandeep
            </span>
          </h1>

          <div
            ref={roleRef}
            style={{
              fontSize: 22,
              fontWeight: 300,
              color: "var(--text-secondary)",
              marginBottom: 24,
              letterSpacing: "-0.3px",
            }}
          >
            Full Stack Developer | SEO Expert
          </div>

          <p
            ref={descRef}
            style={{
              fontSize: 15,
              lineHeight: 1.7,
              color: "var(--text-muted)",
              maxWidth: 480,
              marginBottom: 36,
            }}
          >
            Passionate about building scalable web applications and crafting
            elegant solutions to complex problems. Experienced in modern
            JavaScript frameworks, cloud infrastructure, and full-stack
            development.
          </p>

          <div ref={btnsRef} style={{ display: "flex", gap: 16 }}>
            <button
              onClick={() => scrollTo("projects")}
              style={{
                padding: "14px 32px",
                background:
                  "linear-gradient(135deg, var(--accent-blue), var(--accent-purple))",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                fontFamily: "Inter, sans-serif",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 8px 30px rgba(74,144,217,0.3)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              View Projects
            </button>

            <button
              onClick={() => scrollTo("cta")}
              style={{
                padding: "14px 32px",
                background: "transparent",
                color: "var(--text-primary)",
                border: "1px solid var(--border-hover)",
                borderRadius: 8,
                fontSize: 14,
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
              Contact Me
            </button>
          </div>

          <div
            ref={statsRef}
            style={{
              display: "flex",
              gap: 48,
              marginTop: 48,
              paddingTop: 32,
              borderTop: "1px solid var(--border-color)",
            }}
          >
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
                      "linear-gradient(135deg, var(--accent-blue), var(--accent-cyan))",
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
        <div
          ref={visualRef}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ position: "relative", width: 340, height: 340 }}>
            {["-12px", "-28px", "-44px"].map((inset, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  inset,
                  borderRadius: "50%",
                  border: `1px solid ${["rgba(74,144,217,0.2)", "rgba(139,92,246,0.12)", "rgba(6,182,212,0.08)"][i]}`,
                  animation: `ringPulse 4s ease-in-out infinite`,
                  animationDelay: `${i * 1.3}s`,
                }}
              />
            ))}
            <style>{`
              @keyframes ringPulse {
                0%, 100% { transform: scale(1); opacity: 1; }
                50% { transform: scale(1.03); opacity: 0.5; }
              }
              @keyframes pulse {
                0%, 100% { opacity: 1; transform: scale(1); }
                50% { opacity: 0.5; transform: scale(1.3); }
              }
            `}</style>
            <img
              src={sandeepImg}
              alt="Sandeep"
              style={{
                width: 340,
                height: 340,
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "center top",
                border: "2px solid rgba(74,144,217,0.3)",
                filter: "saturate(0.9)",
              }}
            />
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
                  animation: "pulse 2s infinite",
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
