import React, { useEffect, useRef } from 'react';
import myImage from './assets/himg.png';
import './Image.css';

export default function Image() {
  const observer = useRef(
    new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show1');
        } else {
          entry.target.classList.remove('show1');
        }
      });
    })
  );

  useEffect(() => {
    const elements = document.querySelectorAll('.observe1');
    elements.forEach((el) => observer.current.observe(el));
    return () => {
      observer.current.disconnect(); // Disconnect observer when component unmounts
    };
  }, []);

  return (
    <div className='imgContainer'>
      <img src={myImage} className='observe1' alt='Your Image' />
    </div>
  );
}
