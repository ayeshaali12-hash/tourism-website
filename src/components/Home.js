import React from 'react';
import Review from './NewItems/Review';
import Destination from './Destination';
import "./NewItems/PackageData.css"
// import "./components/NewItems/PackageData.css";
import FamousPackages from './NewItems/FamousPackages';
// import Trips from './Trips';
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
      img1= "https://images.unsplash.com/photo-1485778161019-d41cde65ef6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80"
      />
      <OurServices />
      <Destination />

      <div className='pack-trip'>
        <h1>Famous Packages</h1>
        <p> Explore the vibrant culture and natural beauty with our "Expedition Adventures" package,  </p>
          <div className="package">
            <FamousPackages 
            image = "https://images.unsplash.com/photo-1601226014902-3adf3cbdc5c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            heading = "235,000 PKR"
            text = "Are you ready to turn your vacation dreams into reality? Because Thailand is like a one way ticket to paradise. Let us be your tour guide to explore the wonders of Thailand from the comfort of your own screen."
            place = "Thailand"
            days = " 5 days"
            persons = "2 Persons"
            lastStar = "fa-solid fa-star-half-stroke"/>

            <FamousPackages 
            image = "https://images.unsplash.com/photo-1555400038-63f5ba517a47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            heading = "215,000 PKR"
            text = "Are you ready to turn your vacation dreams into reality? Because Thailand is like a one way ticket to paradise. Let us be your tour guide to explore the wonders of Thailand from the comfort of your own screen."
            place = " Bali"
            days = " 3 days"
            persons = "2 Persons"
            lastStar = "fa-sharp fa-solid fa-star"/>
            
            <FamousPackages 
            image = "https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            heading = "175,000 PKR"
            text = "Are you ready to turn your vacation dreams into reality? Because Thailand is like a one way ticket to paradise. Let us be your tour guide to explore the wonders of Thailand from the comfort of your own screen."
            place = " Dubai"
            days = " 5 days"
            persons = "2 Persons"
            lastStar = "fa-solid fa-star-half-stroke"/>
          </div>
      </div>
      
      <Review />
      <Footer />
      <BackToTop />
    </div>
  )
}
