import React, { useEffect, useRef } from "react";
import "./Image.css";

// The panel is the "at a glance" answer to what I do, so it's written as data
// rather than span soup — the gutter counts off CODE.length, so lines and line
// numbers can't drift apart.
const t = (cls, text) => ({ cls, text });

const CODE = [
  [t("cmt", "// what I actually build")],
  [t("kw", "const"), t("punct", " "), t("prop", "work"), t("punct", " = {")],
  [t("prop", "  pipelines"), t("punct", ": "), t("str", '"classify + mine millions of records"'), t("punct", ",")],
  [t("prop", "  privacy"), t("punct", ":   "), t("str", '"DSAR, consent, PII discovery"'), t("punct", ",")],
  [t("prop", "  agents"), t("punct", ":    "), t("str", '"LLM tools that remember context"'), t("punct", ",")],
  [t("prop", "  devtools"), t("punct", ":  "), t("str", '"MCP servers, supply-chain scanning"'), t("punct", ",")],
  [t("prop", "  infra"), t("punct", ":     "), t("str", '"Docker, self-hosted at home"'), t("punct", ",")],
  [t("prop", "  stack"), t("punct", ":     ["), t("str", '"Python"'), t("punct", ", "), t("str", '"Go"'), t("punct", ", "), t("str", '"TypeScript"'), t("punct", "],")],
  [t("punct", "};")],
];

export default function Image() {
  const observer = useRef(
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show1");
        } else {
          entry.target.classList.remove("show1");
        }
      });
    })
  );

  useEffect(() => {
    const currentObserver = observer.current;
    const elements = document.querySelectorAll(".observe1");
    elements.forEach((el) => currentObserver.observe(el));
    return () => {
      currentObserver.disconnect();
    };
  }, []);

  return (
    <div className="imgContainer">
      <div
        className="hero-visual observe1"
        role="img"
        aria-label="Editor panel summarising what I build: data classification and mining pipelines, privacy tooling, LLM agent tools, developer tools, and self-hosted infrastructure, in Python, Go and TypeScript"
      >
        <div className="hero-visual__shadow" aria-hidden="true" />
        <div className="hero-visual__frame">
          <div className="hero-visual__ribbon" aria-hidden="true">
            <span className="hero-visual__ribbon-dot" />
            <span className="hero-visual__ribbon-text">Data Risk &amp; Privacy</span>
          </div>
          <div className="hero-visual__chrome" aria-hidden="true">
            <div className="hero-visual__chrome-left">
              <span className="hero-visual__dot" />
              <span className="hero-visual__dot" />
              <span className="hero-visual__dot" />
            </div>
            <span className="hero-visual__filename">work.ts</span>
            <span className="hero-visual__pill">TS</span>
          </div>
          <div className="hero-visual__body">
            <div className="hero-visual__noise" aria-hidden="true" />
            <div className="hero-visual__grid" aria-hidden="true" />
            <div className="hero-visual__accent" aria-hidden="true" />
            <div className="hero-visual__gutter" aria-hidden="true">
              {CODE.map((_, i) => (
                <span key={i}>{i + 1}</span>
              ))}
            </div>
            <div className="hero-visual__codeCol">
              <pre className="hero-visual__code">
                <code>
                  {CODE.map((line, i) => (
                    <React.Fragment key={i}>
                      {line.map((token, j) => (
                        <span key={j} className={`hero-visual__${token.cls}`}>
                          {token.text}
                        </span>
                      ))}
                      {"\n"}
                    </React.Fragment>
                  ))}
                </code>
              </pre>
            </div>
          </div>
          <div className="hero-visual__status" aria-hidden="true">
            <span className="hero-visual__status-item">TypeScript</span>
            <span className="hero-visual__status-sep">·</span>
            <span className="hero-visual__status-item">UTF-8</span>
            <span className="hero-visual__status-sep">·</span>
            <span className="hero-visual__status-item">LF</span>
          </div>
        </div>
      </div>
    </div>
  );
}
