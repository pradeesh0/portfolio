import React from 'react'
import { useState } from 'react';
import "./Portfolio.css";

const Portfolio = () => {

  const [flippedStates, setFlippedStates] = useState([false, false, false, false]);
  
    const handleCardFlip = (index) => {
    const newFlippedStates = [...flippedStates];
    if (!newFlippedStates[index]) 
    {
      newFlippedStates[index] = !newFlippedStates[index];
    } 
    setFlippedStates(newFlippedStates);
    };

   
    const flipback=(event,index)=>{
      event.stopPropagation(); 
      const newFlippedStates = [...flippedStates];
      newFlippedStates[index] = false;
      setFlippedStates(newFlippedStates);
        
    }

  const projects = [
    {
      title: "Early Detection Of Parkinsons disease using Machine Learning (Apr 2023)",  
     details: ["The project combines ReactJS for user-friendly interfaces and Python with OpenCV to assess spiral drawings, identifying subtle motor variations associated with Parkinson's disease.",
     " Additionally, TensorFlow powers real-time Facial Emotion Recognition, capturing emotional signals through facial expressions. ",
      "The project achieves an accuracy rate of 98% in predicting disease.",
      "This integrated approach aims to improve healthcare outcomes and facilitate prompt interventions, offering a proactive strategy for early Parkinson's detection.",
      "Demonstrated proficiency in machine learning, data analysis, and web development technologies."],
    },
    {
      title:"Online Video Conferencing Web Application (June 2022)",
      details:["The Online Video Conferencing Web App, built using React.js, Node.js, and WebSocket technology, offers seamless and secure virtual meetings.",
      "prioritized end-to-end encryption to guarantee the security of the conversations and data.",
      "Experience high-quality, real-time video calls and instant messaging, fostering efficient communication for businesses and individuals.",
      "The user-friendly interface ensures a smooth and engaging online collaboration experience.",
    "Gained expertise in React JS, JavaScript, and real-time communication technologies."],
    },
    {
      title:"Article Blog using MERN Stack (June 2023)",
      details:["Designed and developed an  Article Blog web application using the MERN(MongoDB, Express.js, React.js, Node.js) stack.",
    "Implemented a user-friendly platform for creating, displaying, and managing articles,incorporating features such as CRUD(create,read,update,delete) operations.",
    "Ensured the application's scalability and responsiveness for an enhanced user experience.",
    "Showcased proficiency in full-stack development with a focus on MERN technologies."],
},
    {title:"Fully Customized E-Commerce Site (Apr 2022)",
    details:["Conceptualized, designed, and developed a feature-rich e-commerce website from the ground up using React.js and JavaScript",
    " This platform offers an immersive online shopping experience with user-friendly interfaces, seamless navigation, and dynamic product displays. ",
    " Explore a vast array of products, effortlessly add items to your cart, remove products as needed, and enjoy secure, hassle-free transactions.",
    "Highlighted expertise in e-commerce development and user interface customization."],
  }]
  return (
    <section id="projects" className="section">
      <h2 data-aos="zoom-in" data-aos-duration="1000">Projects</h2><h5>(click to view desc)</h5>
      <div className="portfolio">
        {projects.map((project, index) => (
          <div className={`project ${flippedStates[index] ? 'flipped' : ''}`} key={index}  onClick={() => handleCardFlip(index)}>
            <h3 data-aos="fade-top" data-aos-duration="300" data-aos-easing="ease-in">{project.title}</h3>
            <div className='back'>
              <ul>
                <h4>{project.title}</h4>
                {project.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              <img src="close.jpg" alt='close'  onClick={(event) => flipback(event,index)} ></img>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;