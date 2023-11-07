import { useState} from "react";
import React from 'react';
import "./About.css";

const About = () => {

  const [showTechStack, setShowTechStack] = useState(false);

  const toggleTechStack = () => {
    setShowTechStack(!showTechStack);
  };

  const closeTechStack = () => {
    setShowTechStack(false);
  };

  return (
    <section id="about" className='about' >
    <h2 data-aos="zoom-in" data-aos-duration="1000">About me</h2>
        <div className='abt-container'>
            <div className='abt-img' data-aos="zoom-in" data-aos-delay="500">
              <span className='circle'></span>
              <img src='abt-img.jpg' alt="prof"></img>
            </div>
            <div className='abt-para' data-aos="slide-left" data-aos-duration="1500">
              <div className="normpara">
            <p>
          Hello! I'm Pradeesh, a passionate web developer in creating
          responsive and user-friendly websites and web applications.
        </p>
        <p>
          My journey in web development began during the time of pandemic(around like 2021), and since then, I've been on a constant
          learning curve, keeping up with the latest technologies and best practices in the field.
        </p>
        <p>
          When I'm not coding, you can find me playing chess,solving puzzles,watching movies, and I believe that
          a well-rounded life outside of work is essential for maintaining creativity and balance.
        </p>
        <p>I am always eager to take on new challenges and projects that push my boundaries, allowing me to grow both personally and professionally. </p>
        </div>
       {showTechStack ? (<p className= "hide" data-aos="tech-anim">
        <h3>Tech Stack</h3>
        <br/>I have a strong foundation in web development, including proficiency in front-end technologies such as HTML, CSS, JavaScript, and React.js.On the back end, I am skilled in Node.js and Express.js.<br/><br/> My programming expertise extends to C, C++, and Java, providing a solid background in software development. Additionally, I have hands-on experience working with databases, including MongoDB and SQL.<br/><br/>
I am well-versed in using essential development tools like Visual Studio Code, GitHub, and Eclipse, enabling efficient and collaborative coding practices.<br/> <br/>Furthermore, I have practical knowledge of Postman API for testing and debugging. 
<button id="closeTechstack" onClick={closeTechStack}>Close Tech Stack</button> </p> ):

(<button id="Techstack" onClick={toggleTechStack}>Tech Stack</button>)}

        </div>
        </div>
    </section>
  )
}


export default About;