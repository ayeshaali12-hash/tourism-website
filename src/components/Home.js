import React from 'react';
import Hero from './Hero';
import Destination from './Destination';
import Trips from './Trips';
import Footer from './Footer';


export default function Home() {
  return (
    <div>
      <Hero 
      cName = "hero"
      heroImg = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
      title = "Explore the World, Your Way!"
      text = "Join us in making every trip a story worth telling"
      buttonText = "Plan Trip"
      url = "/"
      btnClass = "show"
      />
      <Destination />
      <Trips />
      <Footer />
    </div>
  )
}
