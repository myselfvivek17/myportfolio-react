import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import myImage1 from './assets/weather.jpg';
import myImage2 from './assets/womensafety.png';
import myImage3 from './assets/searcheng.png';
import myImage4 from './assets/notetaker.png';
import myImage5 from './assets/quiz.png';
import myImage6 from './assets/yourcareer.png';
import myImage7 from './assets/pgm.png';
import myImage8 from './assets/Telegrambots.png'

export default function Projects() {
  const [cardData, setCardData] = useState([
    { id: 1, imageUrl: myImage1, header: 'Weather Notifier', tech: ['Python', 'BeautifulSoup', 'Win10Toast'], text: 'Scrapes a weather page, reads the current conditions for a city, and shows them in a Windows 10 notification—no browser needed.' },
    { id: 2, imageUrl: myImage2, header: 'Women Safety App', tech: ['Flutter', 'Dart', 'Firebase'], text: 'Flutter app for reporting incidents, asking for help, and finding resources. Includes location sharing and links to local support.' },
    { id: 3, imageUrl: myImage3, header: 'Search Engine Interface', tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'], text: 'Single-page hub with search boxes that open Google, YouTube, Amazon, Reddit, Wikipedia, and Spotify. Styled with Bootstrap.' },
    { id: 4, imageUrl: myImage4, header: 'Note Taker Application', tech: ['Python', 'Tkinter', 'MySQL'], text: 'Desktop notes app: Tkinter UI, MySQL storage, add/edit/delete/search, and sort notes.' },
  ]);

  const moreData = [
    { id: 5, imageUrl: myImage5, header: 'Quiz Application', tech: ['HTML', 'CSS', 'JavaScript', 'API'], text: 'Pick a topic and question count; loads questions from an API, runs a timer, scores answers, and shows results in a simple chart.' },
    { id: 6, imageUrl: myImage6, header: 'Your Career Application', tech: ['Flutter', 'Dart'], text: 'Flutter app with career guides: company placement overviews, exam prep (e.g. GATE, IELTS), syllabi, tips, and practice material in one place.' },
    { id: 7, imageUrl: myImage7, header: 'Password Generator & Manager', tech: ['Java', 'Spring Boot', 'MySQL'], text: 'Java full-stack app: generate strong passwords, store them encrypted, and manage them through a simple web UI.' },
    { id: 8, imageUrl: myImage8, header: 'Brain Tumor & Cancer Detection Bot', tech: ['Python', 'YOLOv8', 'Telegram API'], text: 'Telegram bot: send an X-ray image, YOLOv8 runs detection, returns labels and short notes so results are easy to share.' }
  ];

  const [showButton, setShowButton] = useState(true);

  const handleViewMore = () => {
    setCardData(prevData => [...prevData, ...moreData]);
    setShowButton(false);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <div className="projects layout" id="projects">
      <div className="projects__intro" style={{ gridColumn: '1 / -1' }}>
        <p className="projects__eyebrow">Projects</p>
        <h2 className="projects__heading">Projects from the last few years</h2>
      </div>
      {cardData.map((card, index) => (
        <motion.div
          key={card.id}
          className="card"
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={cardVariants}
        >
          <div className="card__img-wrap">
            <img src={card.imageUrl} alt="" loading="lazy" />
            <div className="card__img-overlay" aria-hidden="true" />
          </div>
          <div className="text">
            <h2>{card.header}</h2>
            <p>{card.text}</p>
            <div className="card__tech">
              {card.tech.map((t) => (
                <span key={t} className="card__tech-badge">{t}</span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
      {showButton && (
        <motion.div
          className="projects__actions"
          style={{ gridColumn: '1 / -1' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <button type="button" className="viewmore" onClick={handleViewMore}>View All Projects</button>
        </motion.div>
      )}
    </div>
  );
}
