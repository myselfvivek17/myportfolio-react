import React from "react";
import "./Resume.css";

export default function Experience() {
  return (
    <section
      className="resume-section"
      id="experience"
      aria-labelledby="experience-heading"
    >
      <p className="resume-section__eyebrow">Work</p>
      <h2 className="resume-section__title" id="experience-heading">
        Experience
      </h2>
      <article className="resume-card">
        <header className="resume-card__header">
          <h3 className="resume-card__org">PwC</h3>
          <p className="resume-card__role">
            Cyber Risk &amp; Regulatory — Data Risk &amp; Privacy
          </p>
        </header>
        <ul className="resume-card__list">
          <li>
            <strong>Internship (6 months)</strong> — March–August 2024. Supported
            client delivery in Cyber Risk &amp; Regulatory with a focus on data
            governance, privacy operations, and repeatable workflows.
          </li>
          <li>
            <strong>Apprentice program</strong> — Ongoing through August 2025.
            Continuing in the same practice area with deeper ownership of
            automation and GRC tooling.
          </li>
        </ul>
        <p className="resume-card__body" style={{ marginTop: "1rem" }}>
          I design and maintain automations using <strong>Python</strong>,{" "}
          <strong>n8n</strong>, and <strong>APIs</strong> so teams spend less time
          on manual steps and clients can move work forward faster. I have
          configured and enhanced{" "}
          <strong>OneTrust</strong> and <strong>BigID</strong>, including{" "}
          <strong>DSAR</strong> (data subject access request) workflows and{" "}
          <strong>cookie consent</strong> experiences aligned to client policies.
        </p>
      </article>
    </section>
  );
}
