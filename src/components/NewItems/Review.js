import React from 'react'
import ReviewCard from './ReviewCard';
import "./Review.css"

export default function Review() {
    // let box = document.querySelector(".wrapper");
    const backward = () => {
        const slider = document.querySelector('.re-carousel');
        const width = slider.offsetWidth;
        slider.scrollLeft -= width;

    }
    const forward = () => {
        const slider = document.querySelector('.re-carousel');
        const width = slider.offsetWidth;
        slider.scrollLeft += width;
        
    }
  return (
    <>
    <h1 className='review-h1'>Clients Review</h1>
    <div className='re-app'>
        
      <div class="wrapper">
        <button className='wrapper-btn' onClick={backward}><i class="fa-solid fa-less-than"></i></button>
        {/* <div className='wrapper-btn' onClick={backward}><i class="fa-solid fa-less-than"></i></div> */}
        <div class="re-carousel">
            <ReviewCard name="Ayesha" reviews="Exceptional service and unforgettable experiences highly recommended!"/>
            <ReviewCard name="Ali" reviews="The attention to detail made our trip truly extraordinary."/>
            <ReviewCard name="Ashar" reviews="Effortless booking and fantastic customer support throughout."/>
            <ReviewCard name="Alisha" reviews="Our family had the time of our lives on this vacation, thanks to your team!"/>
            <ReviewCard name="Aliya" reviews="The best adventure of my life thank you for making it possible."/>
            <ReviewCard name="Sameed" reviews="From start to finish, a flawless travel experience :) <3"/>
            <ReviewCard name="Ahmed" reviews="A trip filled with unique and breathtaking moments and adventures."/>
            <ReviewCard name="Sana" reviews="Your tours exceeded all our expectations a definite must-try!"/>
            <ReviewCard name="Murs" reviews="Outstanding value for money and a journey we'll cherish forever."/>
            <ReviewCard name="Aizah" reviews="Our heartfelt gratitude for an incredible and seamless travel adventure."/>

        </div>
        <button className='wrapper-btn' onClick={forward}><i class="fa-solid fa-greater-than"></i></button>
        {/* <div className='wrapper-btn' onClick={forward}><i class="fa-solid fa-greater-than"></i></div> */}
    </div>
    </div>
    </>
    
  )
}
