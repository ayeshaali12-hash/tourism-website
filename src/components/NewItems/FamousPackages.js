import React from 'react'
import "./PackageData.css";
export default function FamousPackages(props) {
  return (
    <div>
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
        <h4>{props.heading}</h4>
        <p className='stars'>
        <i class="fa-sharp fa-solid fa-star"></i>
        <i class="fa-sharp fa-solid fa-star"></i>
        <i class="fa-sharp fa-solid fa-star"></i>
        <i class="fa-sharp fa-solid fa-star"></i>
        <i class = {props.lastStar}></i>
        {/* <i class="fa-sharp fa-solid fa-star"></i> */}
        </p>
        <p className='p-para'>{props.text}</p>
        <button className='pack-btn'>Read More</button>
        <button className='pack-btn'>Book Now</button>
      
    </div>
    </div>
    </div>
  )
}
