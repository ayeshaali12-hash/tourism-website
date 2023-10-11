import React from 'react';
import Review from './NewItems/Review';
import Destination from './Destination';
import Trips from './Trips';
import Footer from './Footer';
import Carousel from './NewItems/Carousel';
import AboutUs from './NewItems/AboutUs';
import BackToTop from './NewItems/BackToTop'
import OurServices from './NewItems/OurService';


export default function Home() {
  return (
    <div>
      <Carousel 
      heading = "Explore the World, Your Way!"
      text = "Join us in making every trip a story worth telling"
      />
      <AboutUs 
      img1= "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
      />
      <OurServices />
      <Destination />
      <Trips />
      <Review />
      <Footer />
      <BackToTop />
    </div>
  )
}
