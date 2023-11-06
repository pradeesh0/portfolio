import React from 'react'
import { useState,useEffect } from 'react';

const Funfact = () => {
    const funfact=["Developers spend approximately 50% of their time searching for solutions to problems and troubleshooting issues. That means for every two hours of coding, they spend one hour Googling error messages and reading documentation!"
    ,"In the tech industry, a 20-minute task can easily turn into a full-day adventure when you 'just quickly' check social media.",
    "Why do programmers always mix up Christmas and Halloween?Because Oct 31 == Dec 25.",
    "Why do programmers hate nature?It has too many bugs.",
    "How many programmers does it take to change a light bulb?None; it's a hardware problem.",
    "QR Codes Were Invented in Japan: Quick Response (QR) codes, those square barcodes you often see, were created in Japan in 1994 for tracking parts in the automotive industry.",
    "The computer mouse was named by its inventor, Douglas Engelbart, after the cord resembled a tail.",
    "When Amazon was founded in 1994 by Jeff Bezos, it was initially an online bookstore. It expanded into the e-commerce giant we know today.",
    "Tech support agents often have to deal with unusual questions. One customer once asked if their computer could be shielded against nuclear blasts.",
    "The term 'bug' for a computer problem comes from a literal bug. In 1947, a moth got trapped in a relay of the Harvard Mark II computer, causing a malfunction. The log entry reads, 'First actual case of bug being found.'",
    "Google's playable Pac-Man doodle, released in 2010, was so addictive that it cost the world 4.8 million hours of lost productivity.",
    "Accidentally hitting 'Reply All' on a company-wide email can lead to embarrassing or hilarious consequences.",
    "You start scrolling through your social media feed, and suddenly, hours have passed. Infinite scrolling is like a black hole for your time.",
    "According to various estimates, there are more mobile phones in the world than toothbrushes. Mobile phone adoption has skyrocketed, even in areas with limited access to clean water and sanitation.",
    "In the early days of Amazon, the 'Buy' button was originally intended to be labeled 'Abracadabra.'"
];

const [randomfact,setRandomfact]=useState("hello");

useEffect(()=>{
const randomIndex=Math.floor(Math.random() * funfact.length);
setRandomfact(funfact[randomIndex]);
},[]);

  return (
    <div>{randomfact}</div>
  )
}

export default Funfact