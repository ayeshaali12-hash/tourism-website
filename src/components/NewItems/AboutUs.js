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
            <h3>Welcome to <b style={{color:'green'}}>Travelers</b></h3>
            <p>jkaflskjalskfhlehfsfn, ckjfhasl asfjhasklfbc sjfkdacb jfbak ajkfb avbkjbf cd bkaf
                sfjsjkdfsk  vjfbksdjf nm bvsdnd vjfbj v js vjsh f s g fbjh ifwefbi lffbe wffu
            </p>
            <p>jkaflskjalskfhlehfsfn, ckjfhasl asfjhasklfbc sjfkdacb jfbak ajkfb avbkjbf cd bkaf
                sfjsjkdfsk  vjfbksdjf nm bvsdnd vjfbj v js vjsh f s g fbjh ifwefbi lffbe wffu
            </p>
            <button>Read More</button>
        </div>
        
        </div>
        
    </div>
  )
}
