import React, { useEffect, useRef } from 'react';
import './AboutMe.css';
import DataMe from './DataMe';

export default function AboutMe() {
    const interests = {
        "webdev": {
            "number": 1,
            "name": "Web Development",
            "color": "#3dd6a5",
            "description": "Frontend and backend basics: layouts, APIs, and shipping small apps I can show in a repo or demo."
        },
        "ai": {
            "number": 2,
            "name": "Artificial Intelligence",
            "color": "#5ec8ff",
            "description": "Using ML and AI tools where they help—models, data, and simple pipelines—not hype for its own sake."
        },
        "programmer": {
            "number": 3,
            "name": "Programming",
            "color": "#ff8fab",
            "description": "Writing and debugging code in several languages; comfortable reading docs and trying unfamiliar stacks."
        },
        "automation": {
            "number": 4,
            "name": "Integrations & automation",
            "color": "#f0c14a",
            "description": "Wiring systems together so a job that used to be manual just runs: APIs, scheduled work, and data moving between tools that were never meant to talk. It's how I deliver at PwC and how most of my side projects start."
        },
        "homelab": {
            "number": 5,
            "name": "Home lab & self-hosting",
            "color": "#c4a8ff",
            "description": "A home server for learning and daily use: Docker, networking, backups, and hosting tools I run myself so I understand how they behave under the hood."
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
        const currentObserver = observer.current;
        const elements = document.querySelectorAll('.data-me');
        elements.forEach((el) => currentObserver.observe(el));
        return () => {
            currentObserver.disconnect();
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
