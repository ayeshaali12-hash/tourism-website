import React from 'react';
import Hero from './Hero';
import Footer from './Footer';
import AboutUs from './NewItems/AboutUs';
import Guide from './NewItems/Guide';
import BackToTop from './NewItems/BackToTop';

export default function About() {
  return (
    <div>
      <Hero 
      cName = "hero-about"
      heroImg = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
      title = "About Us"
      btnClass = "hide"
      />
      <AboutUs 
      img1= "https://images.unsplash.com/photo-1485778161019-d41cde65ef6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80"
      />
    <Guide />
      <Footer />
      <BackToTop />
    </div>
  )
}
