import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./Header.css";

const Header = () => {
  return (
    <>
    <header className='header'>
    <h1 data-aos="fade-bottom" data-sos-delay="1500">Portfolio</h1>
        <nav className="navbar" data-aos="fade-left" data-aos-delay="700">
        <a href='#home' className='active'>Home</a>
        <a href='#about'>About</a>
        <a href='#skills'>Skills</a>
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact</a>
        </nav>
    </header> 
   <section className='home' id='home'>
    <div className='sp' data-aos="fade-down" data-aos-delay="1000" data-aos-easing="ease-in">    
      <div className='home-content'>
      <h1 >Hi, I'm <span className='name'>Pradeesh</span></h1>
      <h2> ✨ Dedicated web developer and coding enthusiast, constantly diving into the tech world's wonders. 👨‍💻</h2>
      </div> 
      <button className='resume'>
      <a href="resume.pdf" download="resume.pdf">Download Resume  </a>
    </button>
    <div className='icon'>
      <a href="https://github.com/pradeesh0"><GitHubIcon/></a>
      <a href='https://www.linkedin.com/in/pradeesh-r-542a34232'><LinkedInIcon/></a>
      <a href='https://www.instagram.com/_.pradeesh/'><InstagramIcon/></a>
      <a href='https://x.com/PRADEESH_R_?t=YUd_gYmwsLiffuqRBQdkhw&s=09'><TwitterIcon/></a>
    </div>  
    </div>
    </section>
    </>
  )
}

export default Header;