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
import myImage9 from './assets/workbench.png'

const GH = 'https://github.com/myselfvivek17';

export default function Projects() {
  const [cardData, setCardData] = useState([
    { id: 1, header: 'pkgwatch', repo: `${GH}/pkgwatch`, cover: 'pkgwatch check "pkg:npm/%40ctrl/tinycolor@4.1.2"', tech: ['Go', 'SQLite', 'OSV', 'npm / PyPI'], text: 'Supply-chain watchdog for a small fleet of personal machines. A local registry proxy strips known-malicious versions out of the listing before npm or pip ever sees them, and a background scan matches what you already installed against a signed advisory database. One static binary, no telemetry.' },
    { id: 2, imageUrl: myImage9, header: 'Agent Workbench', repo: `${GH}/agent-workbench`, tech: ['FastAPI', 'LangGraph', 'Next.js', 'TypeScript'], text: 'Six LLM agents on one chat surface — including an AI Council that assembles a panel of domain experts to debate a proposition, and an Agent Factory that researches a topic and builds you a new specialist with its own knowledge base. Runs on OpenRouter or a local Ollama.' },
    { id: 3, header: 'Context Intelligence Layer', repo: `${GH}/context-intelligence`, cover: 'context-cli memory search "why Qdrant" --domain projects', tech: ['Python', 'MCP', 'Qdrant', 'FastEmbed'], text: 'Gives any MCP-compatible model persistent memory and a reusable skill library backed by a vector database. Memories are retrieved by meaning rather than keywords, so you can switch models without losing context. Ships with a companion CLI.' },
    { id: 4, header: 'lanpad', repo: `${GH}/lanpad`, cover: 'python -m agents.laptop.main   # laptop agent', tech: ['Python', 'FastAPI', 'WebSocket', 'PWA'], text: 'Turns a phone into a remote control for a Windows laptop and an Ubuntu home server — trackpad, keyboard, media keys and power, entirely over the local network. Installable as a PWA, PIN pairing, no cloud and no accounts.' },
  ]);

  const moreData = [
    { id: 5, header: 'AutoMCP', repo: `${GH}/automcp`, cover: 'uvicorn app.main:app --reload   # 8-agent pipeline', tech: ['Python', 'FastAPI', 'LLM Agents', 'WebSocket'], text: 'Paste an OpenAPI spec, drop a GitHub URL, or describe your endpoints in plain prose. Eight specialist agents extract schemas, map tools, detect auth and generate a runnable MCP server you can wire straight into Claude Desktop.' },
    { id: 6, header: 'lazyprox', repo: `${GH}/lazyprox`, cover: 'docker compose up -d --build   # gateway on :8088', tech: ['Python', 'Docker', 'systemd'], text: 'A lazy reverse proxy for homelabs. Services sit stopped until someone actually needs them — the gateway starts the container on the first request, waits for readiness and proxies through — then an idle reaper stops them again.' },
    { id: 7, imageUrl: myImage2, header: 'Women Safety App', tech: ['Flutter', 'Dart', 'Firebase'], text: 'Flutter app for reporting incidents, asking for help, and finding resources. Includes location sharing and links to local support.' },
    { id: 8, imageUrl: myImage7, header: 'Password Generator & Manager', repo: `${GH}/Password-Generator-and-Manager`, tech: ['Java', 'Spring Boot', 'MySQL'], text: 'Java full-stack app: generate strong passwords, store them encrypted, and manage them through a simple web UI.' },
    { id: 9, imageUrl: myImage8, header: 'Brain Tumor & Cancer Detection Bot', tech: ['Python', 'YOLOv8', 'Telegram API'], text: 'Telegram bot: send an X-ray image, YOLOv8 runs detection, returns labels and short notes so results are easy to share.' },
    { id: 10, imageUrl: myImage6, header: 'Your Career Application', repo: `${GH}/yourCareer`, tech: ['Flutter', 'Dart'], text: 'Flutter app with career guides: company placement overviews, exam prep (e.g. GATE, IELTS), syllabi, tips, and practice material in one place.' },
    { id: 11, imageUrl: myImage5, header: 'Quiz Application', repo: `${GH}/quiz`, tech: ['HTML', 'CSS', 'JavaScript', 'API'], text: 'Pick a topic and question count; loads questions from an API, runs a timer, scores answers, and shows results in a simple chart.' },
    { id: 12, imageUrl: myImage4, header: 'Note Taker Application', tech: ['Python', 'Tkinter', 'MySQL'], text: 'Desktop notes app: Tkinter UI, MySQL storage, add/edit/delete/search, and sort notes.' },
    { id: 13, imageUrl: myImage3, header: 'Search Engine Interface', tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'], text: 'Single-page hub with search boxes that open Google, YouTube, Amazon, Reddit, Wikipedia, and Spotify. Styled with Bootstrap.' },
    { id: 14, imageUrl: myImage1, header: 'Weather Notifier', tech: ['Python', 'BeautifulSoup', 'Win10Toast'], text: 'Scrapes a weather page, reads the current conditions for a city, and shows them in a Windows 10 notification—no browser needed.' },
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
            {card.imageUrl ? (
              <img src={card.imageUrl} alt="" loading="lazy" />
            ) : (
              /* no screenshot for this one — terminal-style cover instead */
              <div className="card__cover" style={{ '--cover-angle': `${card.id * 47}deg` }} aria-hidden="true">
                <span className="card__cover-cmd">{card.cover}</span>
              </div>
            )}
            <div className="card__img-overlay" aria-hidden="true" />
          </div>
          <div className="text">
            <h2>
              {card.repo ? (
                <a className="card__link" href={card.repo} target="_blank" rel="noreferrer">
                  {card.header}
                  <span className="card__link-arrow" aria-hidden="true">↗</span>
                </a>
              ) : card.header}
            </h2>
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
