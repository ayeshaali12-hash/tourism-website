import React from 'react';
import Hero from './Hero';
import img1 from "../components/Images/img1.jpg"
import Footer from './Footer';
import AllPackages from './NewItems/AllPackages';


export default function Contact() {
  return (
    <div>
      <Hero 
      cName = "hero-about"
      heroImg = {img1}
      title = "Contact Us"
      btnClass = "hide"
      />
      <h1>Contact</h1>
      
      <Footer />
    </div>
  )
}
