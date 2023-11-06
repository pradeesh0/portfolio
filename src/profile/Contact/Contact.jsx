import React from 'react'
import "./Contact.css"
const Contact = () => {
  return (
    <>
    <section id="contact" className="contact">
    <div className="container">
      <h2 data-aos="zoom-in" data-aos-duration="1000">Contact</h2>
      <form action="#">
        <div className='input-box'>
          <div className='input-field' data-aos="slide-left" data-aos-duration="500">
            <input type='text' placeholder='Full Name' required/>
            <span className='focus'></span>
          </div>
          <div className='input-field'data-aos="slide-left" data-aos-duration="800">
            <input type='text' placeholder='Email Address' required/>
            <span className='focus'></span>
            </div>
        </div>
        <div className='textarea-field' data-aos="slide-left" data-aos-duration="1200">
          <textarea name="" id="" cols="30" rows="10" placeholder='your message' required></textarea>
        </div>
        <div className='button' data-aos="fade-out" data-aos-duration="1500">
          <button type="submit" className='btn'>Send</button>
        </div>
      </form>
    </div>
  </section>
</>
  )
}

export default Contact;