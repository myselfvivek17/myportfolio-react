import React from "react";
import "./Resume.css";

const achievements = [
  { name: "Google Prompt Wars Challenge 2 — Election Sathi", note: "2026" },
  { name: "IBM Hackathon — AutoMCP agent pipeline", note: "2026" },
  { name: "1st Place, Code It Out Hackathon", note: "Winner" },
  { name: "Lead Representative, Smart India Hackathon", note: "National" },
  { name: "AI Med Quest Hackathon", note: "Participant" },
];

const certifications = [
  { name: "Data Mapping Automation Foundations", issuer: "OneTrust" },
  { name: "Consent & Preferences: Solution Foundations", issuer: "OneTrust" },
  { name: "Datadog Fundamentals", issuer: "Datadog" },
  { name: "McKinsey Forward Program", issuer: "McKinsey & Company" },
  { name: "Python Data Structures and Algorithms", issuer: "Infosys" },
  { name: "SQL Essential Training", issuer: "Infosys" },
  { name: "Python Basics for Data Science", issuer: "IBM" },
];

export default function Education() {
  return (
    <section
      className="resume-section"
      id="education"
      aria-labelledby="education-heading"
    >
      <p className="resume-section__eyebrow">Background</p>
      <h2 className="resume-section__title" id="education-heading">
        Education &amp; Credentials
      </h2>
      <div className="edu-grid">
        <article className="resume-card">
          <h3 className="edu-card__school">Anurag University</h3>
          <p className="edu-card__loc">Hyderabad, India</p>
          <p className="edu-card__degree">
            B.Tech, Computer Science and Engineering
          </p>
          <p className="edu-card__gpa">
            Graduated <strong>May 2025</strong>
          </p>
          <p className="edu-card__gpa">
            GPA: <strong>9.07</strong> / 10
          </p>
        </article>

        {/* Hackathons and competitions aren't coursework — separate card, not a
            block inside the university one. */}
        <article className="resume-card">
          <h3 className="edu-card__school">Hackathons &amp; Competitions</h3>
          <p className="edu-card__loc">Built and submitted outside of work</p>
          <ul className="cert-list">
            {achievements.map((item) => (
              <li className="cert-list__item" key={item.name}>
                <span className="cert-list__name">{item.name}</span>
                <span className="cert-list__issuer">{item.note}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="resume-card edu-card--tall">
          <h3 className="edu-card__school">Certifications</h3>
          <p className="edu-card__loc">{certifications.length} completed</p>
          <ul className="cert-list">
            {certifications.map((cert) => (
              <li className="cert-list__item" key={cert.name}>
                <span className="cert-list__name">{cert.name}</span>
                <span className="cert-list__issuer">{cert.issuer}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
