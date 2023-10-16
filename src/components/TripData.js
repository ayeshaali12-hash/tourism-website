import "./StylesTrip.css";

import React from 'react'

export default function TripData(props) {
  return (
    <div className="t-card">
        <div className="t-image">
        <img alt="recent place" src={props.image}></img>
        </div>
        
        <h4>{props.heading}</h4>
        <p className='stars'>
        <i class="fa-sharp fa-solid fa-star"></i>
        <i class="fa-sharp fa-solid fa-star"></i>
        <i class="fa-sharp fa-solid fa-star"></i>
        <i class="fa-sharp fa-solid fa-star"></i>
        <i class = {props.lastStar}></i>
        </p>
        <p>{props.text}</p>
      
    </div>
  )
}
