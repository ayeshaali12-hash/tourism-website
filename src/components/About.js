import React from 'react';
import Hero from './Hero';
import Footer from './Footer';

export default function About() {
  return (
    <div>
      <Hero 
      cName = "hero-about"
      heroImg = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
      title = "About Us"
      btnClass = "hide"
      />
      <h1>ABout</h1>

      <Footer />
    </div>
  )
}
