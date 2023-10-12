import React from 'react';
import "./NewItems/PackageData.css";
import PackageData from './NewItems/PackageData';
import Hero from './Hero';
import Footer from './Footer';

 function Packages() {
  return (
    <div>
      <Hero 
          cName = "hero-about"
          heroImg = "https://images.unsplash.com/photo-1682685797507-d44d838b0ac7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          title = "Services we provide"
          btnClass = "hide"
          />
      <div className='pack-trip'>
        <h1>Famous Packages</h1>
        <p> You can discover unique destination 
          using Google Maps. </p>
          <div className="package">
          
              <PackageData 
              image = "https://images.unsplash.com/photo-1601226014902-3adf3cbdc5c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              heading = "235,000 PKR"
              text = "Are you ready to turn your vacation dreams into reality? Because Thailand is like a one way ticket to paradise. Let us be your tour guide to explore the wonders of Thailand from the comfort of your own screen."
              place = "Thailand"
              days = " 5 days"
              persons = "2 Persons"
              lastStar = "fa-solid fa-star-half-stroke"
              />
              <PackageData 
              image = "https://images.unsplash.com/photo-1555400038-63f5ba517a47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              heading = "215,000 PKR"
              text = "Are you ready to turn your vacation dreams into reality? Because Thailand is like a one way ticket to paradise. Let us be your tour guide to explore the wonders of Thailand from the comfort of your own screen."
              place = " Bali"
              days = " 3 days"
              persons = "2 Persons"
              lastStar = "fa-sharp fa-solid fa-star"
              />
              <PackageData 
              image = "https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
              heading = "175,000 PKR"
              text = "Are you ready to turn your vacation dreams into reality? Because Thailand is like a one way ticket to paradise. Let us be your tour guide to explore the wonders of Thailand from the comfort of your own screen."
              place = " Dubai"
              days = " 5 days"
              persons = "2 Persons"
              lastStar = "fa-solid fa-star-half-stroke"
              />
          </div>
      </div>

      <div className='pack-trip'>
        <h1>Famous Packages</h1>
        <p> You can discover unique destination 
          using Google Maps. </p>
          <div className="package">
          
              <PackageData 
              image = "https://images.unsplash.com/photo-1601226014902-3adf3cbdc5c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              heading = "235,000 PKR"
              text = "Are you ready to turn your vacation dreams into reality? Because Thailand is like a one way ticket to paradise. Let us be your tour guide to explore the wonders of Thailand from the comfort of your own screen."
              place = "Thailand"
              days = " 5 days"
              persons = "2 Persons"
              lastStar = "fa-solid fa-star-half-stroke"
              />
              <PackageData 
              image = "https://images.unsplash.com/photo-1555400038-63f5ba517a47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              heading = "215,000 PKR"
              text = "Are you ready to turn your vacation dreams into reality? Because Thailand is like a one way ticket to paradise. Let us be your tour guide to explore the wonders of Thailand from the comfort of your own screen."
              place = " Bali"
              days = " 3 days"
              persons = "2 Persons"
              lastStar = "fa-sharp fa-solid fa-star"
              />
              <PackageData 
              image = "https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
              heading = "175,000 PKR"
              text = "Are you ready to turn your vacation dreams into reality? Because Thailand is like a one way ticket to paradise. Let us be your tour guide to explore the wonders of Thailand from the comfort of your own screen."
              place = " Dubai"
              days = " 5 days"
              persons = "2 Persons"
              lastStar = "fa-solid fa-star-half-stroke"
              />
          </div>
      </div>
      <Footer />
    </div>
  )
}
export default Packages;