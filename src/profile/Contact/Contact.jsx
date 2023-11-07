import React,{useRef,useState} from 'react'
import emailjs from '@emailjs/browser';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import "./Contact.css"

const Contact = () => {
  const form =useRef()
  const [successmessage,setsuccessmessage]=useState(null);
  const sendemail=(e)=>{
    e.preventDefault();

    emailjs.sendForm('service_i6p9msa', 'template_jmc6zla', form.current, 'GEAjkoZuzxfYgW4Mc')
      .then((result) => {
          console.log(result.text);
          if(result.text === 'OK'){
           setsuccessmessage("Your message sent successfully ✅");
           setTimeout(()=>{
            setsuccessmessage(null);
           },5000);
          }
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  return (
    <>
    <section id="contact" className="contact">
    <div className="container">
      <h2 data-aos="zoom-in" data-aos-duration="1000">Contact</h2>
      <form ref={form} onSubmit={sendemail}>
        <div className='input-box'>
          <div className='input-field' data-aos="slide-left" data-aos-duration="500">
            <input type='text' name="user_name" placeholder='Full Name' required/>
            <span className='focus'></span>
          </div>
          <div className='input-field' data-aos="slide-left" data-aos-duration="800">
            <input type='email' name="user_email" placeholder='Email Address' required/>
            <span className='focus'></span>
            </div>
        </div>
        <div className='textarea-field' data-aos="slide-left" data-aos-duration="1200">
          <textarea name="message"  cols="30" rows="10" placeholder='your message' required></textarea>
        </div>
        <div className='button' data-aos="fade-out" data-aos-duration="1500">
          <button type="submit" className='btn'>Send</button>
        </div>
        {successmessage && <div className='formresponse' data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="500">
        {successmessage} </div>}
      </form>
      <div style={{display:"flex",justifyContent:"space-evenly"}} >
      <div className='icon'  data-aos="slide-left" data-aos-duration="1200">
      <a href="https://github.com/pradeesh0"><GitHubIcon/></a>
      <a href='https://www.linkedin.com/in/pradeesh-r-542a34232'><LinkedInIcon/></a>
      <a href='https://www.instagram.com/_.pradeesh/'><InstagramIcon/></a>
      <a href='https://x.com/PRADEESH_R_?t=YUd_gYmwsLiffuqRBQdkhw&s=09'><TwitterIcon/></a>
    </div>
    <div className='icon'  data-aos="zoom-in" data-aos-duration="1200">
    <a href="#home"><ArrowUpwardIcon/></a>
    </div>
    </div>  
    </div>
  </section>
</>
  )
}

export default Contact;