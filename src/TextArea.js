import React, { useEffect, useRef } from 'react';
import './TextArea.css';

const TextArea = () => {
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
    const elements = document.querySelectorAll('.observe');
    elements.forEach((el) => observer.current.observe(el));
    return () => {
      observer.current.disconnect(); // Disconnect observer when component unmounts
    };
  }, []);

  return (
    <div className='TxtA'>
        <h1>I'm Vivek</h1>
      <section className='observe hidden'>
        <h1>An Aspiring</h1>
        <h1 style={{ color: 'gray' }}>Web Developer</h1>
      </section>
    </div>
  );
};

export default TextArea;
