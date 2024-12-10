import React, { useState } from 'react';
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
  // Array containing data for each card
  const [cardData, setCardData] = useState([
    { id: 1, imageUrl: myImage1, header: 'Weather Notifier (Python)', text: 'This program fetches the live weather information from a specific URL using web scraping, displays the current temperature and weather condition for a given location using Windows 10 notifications.' },
    { id: 2, imageUrl: myImage2, header: 'Women Safety App (Flutter)', text: 'Women Safety Reporting and Monitoring Tool is a mobile application designed to empower women by providing a reliable space to report incidents, request assistance, and access essential resources. Developed using Flutter, the app focuses on enhancing safety through real-time reporting, location tracking, and connecting users to local support services.' },
    { id: 3, imageUrl: myImage3, header: 'Search Engine Interface (HTML/CSS/JavaScript)', text: 'This code is an HTML document that creates a search engine interface. It includes a navigation bar, search forms for different search engines (Google, YouTube, Amazon, Reddit, Wikipedia, and Spotify), and styling using Bootstrap CSS. ' },
    { id: 4, imageUrl: myImage4, header: 'Note Taker Application (Python/Tkinter/MySQL)', text: 'This Python program uses Tkinter for the user interface and MySQL for data storage to create a basic note-taking application with features like adding, editing, searching, deleting, and sorting notes.' },
  ]);

  const moreData = [
    { id: 5, imageUrl: myImage5, header: 'Quiz Application (HTML/CSS/JS)', text: 'This website allows users to input a category and question number, leveraging APIs to dynamically generate a customized webpage with relevant content, such as questions, answers, with timer and a pie chart representation of your results.' },
    { id: 6, imageUrl: myImage6, header: 'Your Carrer Application (Flutter)', text: 'Dive into career aspirations with our Flutter-based career app, your one-stop destination for insights into top company placement processes and competitive exams like GATE , IELTS and many more. Seamlessly navigate through comprehensive resources, including exam syllabi, preparation tips, and mock tests, empowering you to chart your path to success with confidence and clarity.' },
    { id: 7, imageUrl: myImage7, header: 'Password Generator and Manager (Full Stack Java)', text: 'Experience the convenience of secure password generation and management with our Java full stack project, seamlessly integrating robust algorithms to generate complex passwords, encrypting and managing them securely, while providing an intuitive user interface for effortless access and organization.' },
    {id: 8, imageUrl:myImage8,header:'Brain Tumor and Breast Cancer Detection Bot (Python, YOLOv8, Telegram API)',text:'Developed a Telegram bot utilizing YOLOv8 for real-time detection and classification of brain tumors and breast cancer from X-ray images, automating result delivery, offering detailed insights on detected conditions, and ensuring an intuitive, user-friendly experience for enhanced accessibility and support.'}
  ];

  const [showButton, setShowButton] = useState(true); // State to track visibility of the button

  // Function to handle adding more data
  const handleViewMore = () => {
    setCardData(prevData => [...prevData, ...moreData]);
    setShowButton(false); // Hide the button after clicking
  };

  return (
    <div className='layout' id='projects'>
      <div style={{paddingLeft:"3%"}}>
        <h4 style={{color:"#8491A0"}}>MY PROJECTS</h4>
        <h1 style={{fontSize:"50px"}}>Work that I've done for the past 3 years</h1>
      </div>
      {cardData.map(card => (
        <div key={card.id} className="card">
          <img src={card.imageUrl} alt=""/>
          <div className="text">
            <h2>{card.header}</h2>
            <p>{card.text}</p>
          </div>
        </div>
      ))}
      {showButton && ( // Render the button only if showButton is true
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"300px"}}>
          <button className='viewmore' onClick={handleViewMore}>View All Projects</button>
        </div>
      )}
    </div>
  );
}
