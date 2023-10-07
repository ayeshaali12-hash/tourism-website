import "./StyleHero.css";
import React from 'react';


export default function Hero(props) {
  return (
    <>
        <div className={props.cName}>
            <img alt='home-img' src={props.heroImg}></img>
            <div className="hero-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a className={props.btnClass} href={props.url}>{props.buttonText}</a>
            </div>

        
        </div>
    </>
    
  )
}
