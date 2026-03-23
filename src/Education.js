import React from "react";
import "./Resume.css";

export default function Education() {
  return (
    <section
      className="resume-section"
      id="education"
      aria-labelledby="education-heading"
    >
      <p className="resume-section__eyebrow">Academic</p>
      <h2 className="resume-section__title" id="education-heading">
        Education
      </h2>
      <div className="edu-grid">
        <article className="resume-card">
          <h3 className="edu-card__school">Anurag University</h3>
          <p className="edu-card__loc">Hyderabad, India</p>
          <p className="edu-card__degree">
            B.Tech, Computer Science and Engineering
          </p>
          <p className="edu-card__gpa">
            Expected graduation: <strong>May 2025</strong>
            <br />
            GPA: <strong>8.99</strong> / 10
          </p>
        </article>
      </div>
    </section>
  );
}
