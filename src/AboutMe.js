import React, { useEffect, useRef } from 'react';
import './AboutMe.css';
import DataMe from './DataMe';

export default function AboutMe() {
    const interests = {
        "webdev": {
            "number": 1,
            "name": "Web Development",
            "color": "#3CC74E",
            "description": "Exploring the latest trends and technologies in web development."
        },
        "ai": {
            "number": 2,
            "name": "Artificial Intelligence",
            "color": "#609BFF",
            "description": "Delving into the world of AI to create smarter solutions."
        },
        "programmer": {
            "number": 3,
            "name": "Programming",
            "color": "#E95D90",
            "description": "Constantly learning and improving coding skills across various languages."
        }
    };
    const observer = useRef(
        new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show2');
                } else {
                    entry.target.classList.remove('show2');
                }
            });
        })
    );

    useEffect(() => {
        const elements = document.querySelectorAll('.data-me');
        elements.forEach((el) => observer.current.observe(el));
        return () => {
            observer.current.disconnect();
        };
    }, []);

    return (
        <div className='container observe2'>
            {Object.keys(interests).map((key) => (
                <DataMe
                    key={key}
                    number={interests[key].number}
                    name={interests[key].name}
                    color={interests[key].color}
                    description={interests[key].description}
                />
            ))}
        </div>
    );
}
