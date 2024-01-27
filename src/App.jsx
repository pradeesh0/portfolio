import React,{useEffect} from 'react'
import './App.css';
import Header from './profile/Header/Header';
import About from './profile/About/About';
import Portfolio from './profile/Portfolio/Portfolio';
import Skills from './profile/Skills/Skills';
import Contact from './profile/Contact/Contact';
import Footer from './profile/Footer/Footer';
import Mobilecontent from './profile/Mobliecontent/Mobilecontent';
import AOS from "aos";
import 'aos/dist/aos.css'

const App = () => {

useEffect(()=>{
  AOS.init({offset:50,mirror:false}  
    );
},[])

  return (
    <div className='App'>
    <Mobilecontent/>
    <Header/>
    <About/>
    <Skills/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App