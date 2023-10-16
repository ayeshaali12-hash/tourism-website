import "./StylesTrip.css";

import React from 'react'
import TripData from "./TripData";



export default function Trips() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p> You can discover unique destination 
        using Google Maps. </p>
        <div className="trip-card">
            <TripData 
            image = "https://plus.unsplash.com/premium_photo-1673151333840-3f780bdb92f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            lastStar= "fa-solid fa-star-half-stroke"
            heading = "Trip to Indonesia"
            text = "Trip to Indonesia promises a diverse and enchanting experience. From the stunning beaches of Bali and the lush jungles of Borneo to the rich cultural heritage of Yogyakarta, Indonesia offers a tapestry of natural beauty and vibrant traditions. Explore ancient temples, delicious cuisine, and witness warm hospitality of people on journey"
            />
            <TripData 
            image = "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
            lastStar="fa-sharp fa-solid fa-star"
            heading = "Trip to Paris"
            text = "A trip to Paris is a captivating journey through history, art, and romance. The City of Light enchants with its iconic landmarks like the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral. Stroll along the Seine River, savor exquisite cuisine, and immerse yourself in the rich culture and chic ambiance of this world-renowned destination."
            
            />
            <TripData 
            image = "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            lastStar= "fa-solid fa-star-half-stroke"
            heading = "Trip to Maldives"
            text = "A trip to the Maldives is a dreamy escape to a paradise of crystal-clear turquoise waters and white-sand beaches. With overwater bungalows, vibrant coral reefs for snorkeling, and the ultimate relaxation, the Maldives offers a truly idyllic retreat. Maldives provide a tropical destination promises an unforgettable and luxurious getaway."
            />
    
        </div>
    </div>
  )
}
