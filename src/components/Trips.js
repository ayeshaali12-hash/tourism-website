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
            heading = "Trip to Indonesia"
            text = "offically the replubic of indon ais asd sd fsd as f a s f sfsd gsdas f nma sdjka djkagdj hasd fgjlags kajsdjka F GSj G AJHS DGA LUGDA JSEGAS ADHGLJgDJaF sjfgAFUdgaifugdjb adajsdglajsgdjasdjasdglauDX jdhg"
            />
            <TripData 
            image = "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
            heading = "Trip to Paris"
            text = "offically the replubic of indon ais asd sd fsd as f a s f sfsd gsdas f nma sdjka djkagdj hasd fgjlags kajsdjka F GSj G AJHS DGA LUGDA JSEGAS ADHGLJgDJaF sjfgAFUdgaifugdjb adajsdglajsgdjasdjasdglauDX jdhg"
            />
            <TripData 
            image = "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            heading = "Trip to Maldives"
            text = "offically the replubic of indon ais asd sd fsd as f a s f sfsd gsdas f nma sdjka djkagdj hasd fgjlags kajsdjka F GSj G AJHS DGA LUGDA JSEGAS ADHGLJgDJaF sjfgAFUdgaifugdjb adajsdglajsgdjasdjasdglauDX jdhg"
            />
    
        </div>
    </div>
  )
}
