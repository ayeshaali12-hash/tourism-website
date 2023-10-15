import React from 'react';
import Hero from './Hero';
// import img1 from "../components/Images/img1.jpg"
import Footer from './Footer';
import BackToTop from './NewItems/BackToTop';
import ContactUs from './NewItems/ContactUs';


export default function Contact() {
  return (
    <div>
      <Hero 
      cName = "hero-about"
      heroImg = "https://images.unsplash.com/photo-1414541944151-2f3ec1cfd87d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
      title = "Contact Us"
      btnClass = "hide"
      />
      <ContactUs />
      <Footer />
      <BackToTop />
    </div>
  )
}
