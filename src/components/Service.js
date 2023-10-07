import React from 'react';
import Hero from './Hero';
import Footer from './Footer';
import Trips from './Trips';


export default function Service() {
  return (
    <div>
      <Hero 
      cName = "hero-about"
      heroImg = "https://images.unsplash.com/photo-1682685797507-d44d838b0ac7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      title = "Services we provide"
      btnClass = "hide"
      />
      <Trips />
      
      <Footer />
    </div>
  )
}
