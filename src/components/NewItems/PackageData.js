// single Component of a Package
import React from 'react';
import "./PackageData.css";

export default function PackageData(props) {
  return (
    <div>
      <div className="p-card">
        <div className="p-image">
        <img alt="recent place" src={props.image}></img>
        </div>
        <div className='table-box'>
          <div className='table-row'>
            <div className='table-cell'>
              <p> <i class="fa-solid fa-location-dot"></i>{props.place}</p>
            </div>
            <div className='table-cell'>
              <p><i class="fa-solid fa-calendar-days"></i>{props.days}</p>
            </div>
            <div className='table-cell'>
              <p><i class="fa-solid fa-user "></i> {props.persons}</p>
            </div>
          </div>
        </div>
        
        <p className='cities'>
          {props.lastStar}
        </p>
        <h4 className='cities-heading'>{props.heading}</h4>
        <p className='p-para'>{props.text}</p>
        <button className='pack-btn'>Read More</button>
        <button className='pack-btn'>Book Now</button>
      
    </div>
    </div>
  )
}
