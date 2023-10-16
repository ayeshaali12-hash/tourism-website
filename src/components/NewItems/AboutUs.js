import React from 'react';
import "./AboutUs.css";

export default function AboutUs(props) {
  return (
    <div className='main'>
        <h1>About Us</h1>
      <div className="first-div">
        <div className='ab-image'>
        <img alt='Tall Volcano' src={props.img1}></img>
        </div>
        <div className='ab-text'>
            <h3>Welcome to <b style={{color:'#008080'}}>Travelers</b></h3>
            <p>At <b style={{color:"#008080"}}>Travelers</b>, we are passionate about exploring the world's wonders and creating unforgettable travel experiences. Our mission is to inspire and assist travelers in discovering the beauty, diversity, and rich cultural heritage our planet has to offer.
            </p>
            <p>Founded in 2020, our team of avid globetrotters and travel enthusiasts came together 
              with a shared vision: to simplify and enhance the way people plan their journeys. 
              We understand that travel is not just about reaching a destination; 
              it's about the moments, the stories, and the connections made along the way.
            </p>
            <button className='Ab-us-btn'>Read More</button>
        </div>
        
        </div>
        
    </div>
  )
}
