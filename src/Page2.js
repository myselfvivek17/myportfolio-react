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
        <h1 className="page2__title">CS student · privacy &amp; automation</h1>
        <p className="page2__lead">
          I&apos;m a final-year B.Tech Computer Science student at Anurag
          University (Hyderabad), graduating in May 2025. At{" "}
          <strong>PwC</strong> I work in <strong>Cyber Risk &amp; Regulatory</strong>{" "}
          on the <strong>Data Risk &amp; Privacy</strong> team—shipping
          automation with Python, n8n, and APIs, and supporting{" "}
          <strong>OneTrust</strong> and <strong>BigID</strong> (including DSAR
          and cookie consent). I also build web projects on the side to keep my
          engineering skills sharp.
        </p>
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
