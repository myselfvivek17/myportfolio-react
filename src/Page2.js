import React from "react";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import "./Page2.css";

export default function Page2() {
  return (
    <div className="page2" id="about">
      <div className="page2__inner">
        <p className="page2__eyebrow">About</p>
        <h1 className="page2__title">Privacy engineering · AI systems</h1>
        <div className="page2__lead-grid">
          <p className="page2__lead">
            I&apos;m an <strong>Associate at PwC</strong> in{" "}
            <strong>Cyber Risk &amp; Regulatory</strong>, on the{" "}
            <strong>Data Risk &amp; Privacy</strong> team in Hyderabad. I build
            the engineering side of privacy programmes: AI classification
            pipelines that sort structured, unstructured, and media data at
            millions-of-records scale, a data mining pipeline that finds{" "}
            <strong>PII and hardcoded secrets</strong> across client data
            estates, and an internal chat interface over{" "}
            <strong>OneTrust</strong> the privacy engineering team uses instead
            of the console.
          </p>
          <p className="page2__lead">
            Outside work I ship open source — an <strong>MCP middleware</strong>{" "}
            that gives any LLM persistent memory, an 8-agent pipeline that turns
            an API spec into a working MCP server, and a supply-chain watchdog
            in Go. Most of it runs on a home server I maintain myself. B.Tech
            CSE from Anurag University, GPA 9.07.
          </p>
        </div>
        <Skills />
        <Experience />
        <Education />
        <hr className="page2__rule" aria-hidden="true" />
        <h2 className="page2__subtitle">Roles I&apos;m interested in</h2>
        <div className="page2__spacer" aria-hidden="true" />
        <AboutMe />
      </div>
    </div>
  );
}
