import React from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const skillGroups = [
  {
    category: "Languages",
    color: "#3dd6a5",
    skills: ["Python", "JavaScript", "Java", "Dart", "HTML", "CSS", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    color: "#5ec8ff",
    skills: ["React", "Flutter", "Spring Boot", "Tkinter", "Bootstrap"],
  },
  {
    category: "Tools & Platforms",
    color: "#f0c14a",
    skills: ["n8n", "OneTrust", "BigID", "Docker", "Git", "VS Code"],
  },
  {
    category: "Areas",
    color: "#c4a8ff",
    skills: ["Privacy (DSAR)", "Automation", "APIs", "GRC", "Web Dev"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Skills() {
  return (
    <section className="skills" id="skills" aria-labelledby="skills-heading">
      <p className="skills__eyebrow">Tech Stack</p>
      <h2 className="skills__title" id="skills-heading">
        Skills &amp; Tools
      </h2>
      <div className="skills__groups">
        {skillGroups.map((group) => (
          <div key={group.category} className="skills__group">
            <h3
              className="skills__group-label"
              style={{ color: group.color }}
            >
              {group.category}
            </h3>
            <motion.div
              className="skills__pills"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
            >
              {group.skills.map((skill) => (
                <motion.span
                  key={skill}
                  className="skills__pill"
                  style={{
                    "--pill-color": group.color,
                  }}
                  variants={pillVariants}
                  whileHover={{ y: -3, scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
