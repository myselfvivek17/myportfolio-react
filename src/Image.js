import React, { useEffect, useRef } from "react";
import "./Image.css";

// keep in sync with the <pre> below — the gutter counts off these
const CODE_LINES = 11;

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
        aria-label="Editor-style panel: automation, privacy tooling, and stack"
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
            <span className="hero-visual__filename">workspace.ts</span>
            <span className="hero-visual__pill">TS</span>
          </div>
          <div className="hero-visual__body">
            <div className="hero-visual__noise" aria-hidden="true" />
            <div className="hero-visual__grid" aria-hidden="true" />
            <div className="hero-visual__accent" aria-hidden="true" />
            <div className="hero-visual__gutter" aria-hidden="true">
              {Array.from({ length: CODE_LINES }, (_, i) => (
                <span key={i}>{i + 1}</span>
              ))}
            </div>
            <div className="hero-visual__codeCol">
              <pre className="hero-visual__code">
                <code>
                  <span className="hero-visual__cmt">
                    {"// Privacy · automation · web"}
                  </span>
                  {"\n"}
                  <span className="hero-visual__kw">await</span>{" "}
                  <span className="hero-visual__fn">n8n</span>
                  <span className="hero-visual__punct">.</span>
                  <span className="hero-visual__fn">run</span>
                  <span className="hero-visual__punct">({"{"}</span>
                  {"\n"}
                  <span className="hero-visual__prop">{"  flow"}</span>
                  <span className="hero-visual__punct">: </span>
                  <span className="hero-visual__str">&quot;dsar&quot;</span>
                  <span className="hero-visual__punct">,</span>
                  {"\n"}
                  <span className="hero-visual__prop">{"  stack"}</span>
                  <span className="hero-visual__punct">: [</span>
                  <span className="hero-visual__str">&quot;BigID&quot;</span>
                  <span className="hero-visual__punct">, </span>
                  <span className="hero-visual__str">&quot;OneTrust&quot;</span>
                  <span className="hero-visual__punct">],</span>
                  {"\n"}
                  <span className="hero-visual__punct">{"});"}</span>
                  {"\n\n"}
                  <span className="hero-visual__cmt">
                    {"// Agents remember across sessions"}
                  </span>
                  {"\n"}
                  <span className="hero-visual__kw">const</span>{" "}
                  <span className="hero-visual__prop">recall</span>
                  <span className="hero-visual__punct"> = </span>
                  <span className="hero-visual__kw">await</span>{" "}
                  <span className="hero-visual__fn">memory</span>
                  <span className="hero-visual__punct">.</span>
                  <span className="hero-visual__fn">search</span>
                  <span className="hero-visual__punct">({"{"}</span>
                  {"\n"}
                  <span className="hero-visual__prop">{"  domain"}</span>
                  <span className="hero-visual__punct">: </span>
                  <span className="hero-visual__str">&quot;projects&quot;</span>
                  <span className="hero-visual__punct">,</span>
                  {"\n"}
                  <span className="hero-visual__punct">{"});"}</span>
                </code>
              </pre>
              <div className="hero-visual__chips" aria-hidden="true">
                <span className="hero-visual__chip">Python</span>
                <span className="hero-visual__chip hero-visual__chip--blue">
                  FastAPI
                </span>
                <span className="hero-visual__chip hero-visual__chip--blue">
                  MCP
                </span>
                <span className="hero-visual__chip hero-visual__chip--gold">
                  Qdrant
                </span>
                <span className="hero-visual__chip hero-visual__chip--gold">
                  GRC
                </span>
              </div>
            </div>
          </div>
          <div className="hero-visual__status" aria-hidden="true">
            <span className="hero-visual__status-item">n8n</span>
            <span className="hero-visual__status-sep">·</span>
            <span className="hero-visual__status-item">DSAR</span>
            <span className="hero-visual__status-sep">·</span>
            <span className="hero-visual__status-item">UTF-8</span>
          </div>
        </div>
      </div>
    </div>
  );
}
