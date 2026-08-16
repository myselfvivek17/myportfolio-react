import React from "react";
import "./Resume.css";

const roles = [
  {
    id: "pwc-associate",
    org: "PwC",
    title: "Associate — Cyber Risk & Regulatory",
    team: "Data Risk & Privacy",
    dates: "Aug 2025 – Present · Hyderabad",
    current: true,
    bullets: [
      <>
        Built an internal <strong>MCP server and chat interface over OneTrust</strong>,
        letting the privacy engineering team query and operate the platform in
        natural language instead of navigating the console.
      </>,
      <>
        Designed <strong>AI data classification pipelines</strong> that categorise
        documents across structured, unstructured, and media file types —
        millions of records across <strong>3 enterprise client engagements</strong>.
      </>,
      <>
        Engineered a data mining pipeline that detects <strong>PII and hardcoded
        secrets</strong> across heterogeneous client data sources, replacing manual
        document review.
      </>,
      <>
        Built <strong>n8n and LLM automation</strong> for data mapping, reporting,
        and evidence collection across engagements.
      </>,
    ],
  },
  {
    id: "pwc-intern",
    org: "PwC",
    title: "Intern — Data Risk & Privacy",
    team: "Cyber Risk & Regulatory",
    dates: "Mar 2025 – Aug 2025 · Bangalore",
    current: false,
    bullets: [
      <>
        Implemented enterprise privacy tooling in <strong>OneTrust</strong> and{" "}
        <strong>BigID</strong> — <strong>DSAR</strong> lifecycle workflows and cookie
        consent configuration across client-facing platforms.
      </>,
      <>
        Performed data source scanning and categorisation to discover and classify
        sensitive and personal data.
      </>,
      <>
        Authored internal technical and process documentation for privacy
        workflows, improving onboarding for new team members.
      </>,
    ],
  },
];

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
      <div className="role-grid">
        {roles.map((role) => (
          <article className="resume-card" key={role.id}>
            <header className="resume-card__header">
              <div className="resume-card__top">
                <h3 className="resume-card__org">{role.org}</h3>
                {role.current && (
                  <span className="resume-card__badge">
                    <span className="resume-card__badge-dot" aria-hidden="true" />
                    Current
                  </span>
                )}
              </div>
              <p className="resume-card__role">{role.title}</p>
              <p className="resume-card__dates">
                {role.team} · {role.dates}
              </p>
            </header>
            <ul className="resume-card__list">
              {role.bullets.map((bullet, i) => (
                <li key={`${role.id}-${i}`}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
