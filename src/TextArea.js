import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './TextArea.css';

const roles = [
  'privacy engineering',
  'AI agent systems',
  'data pipelines',
  'developer tooling',
];

const TextArea = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const observer = useRef(
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    })
  );

  useEffect(() => {
    const currentObserver = observer.current;
    const elements = document.querySelectorAll('.observe');
    elements.forEach((el) => currentObserver.observe(el));
    return () => {
      currentObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
      }, 40);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }, 80);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      className="TxtA"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.p className="hero__eyebrow" variants={itemVariants}>
        Privacy engineering · AI systems
      </motion.p>
      <motion.h1 className="hero__title hero__title--shimmer" variants={itemVariants}>
        Hi, I&apos;m Vivek
      </motion.h1>
      <motion.section className="hero__roles" variants={itemVariants}>
        <span className="hero__line">I work on</span>
        <h2 className="hero__title hero__title--accent">
          {displayText}
          <span className="hero__cursor" aria-hidden="true">|</span>
        </h2>
      </motion.section>
      <motion.p className="hero__blurb" variants={itemVariants}>
        Classification pipelines and privacy tooling by day, open-source agent
        infrastructure the rest of the time. Most of it runs on a home server I
        maintain myself.
      </motion.p>
      <motion.div className="hero__cta-row" variants={itemVariants}>
        <a href="#projects" className="hero__cta hero__cta--primary">
          View Projects
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <a href="#connect" className="hero__cta hero__cta--outline">
          Get in Touch
        </a>
      </motion.div>
      <motion.dl className="hero__meta" variants={itemVariants}>
        <div className="hero__meta-item">
          <dt>Currently</dt>
          <dd>
            <span className="hero__meta-dot" aria-hidden="true" />
            Associate at PwC — Data Risk &amp; Privacy
          </dd>
        </div>
        <div className="hero__meta-item">
          <dt>Based in</dt>
          <dd>Hyderabad, India</dd>
        </div>
      </motion.dl>
    </motion.div>
  );
};

export default TextArea;
