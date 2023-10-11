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
            <ReviewCard name="Ayesha"/>
            <ReviewCard name="Ali"/>
            <ReviewCard name="Ashar"/>
            <ReviewCard name="Alisha"/>
            <ReviewCard name="Aliya"/>
            <ReviewCard name="Sameed"/>
            <ReviewCard name="Ahmed"/>
            <ReviewCard name="Sana"/>
            <ReviewCard name="Murs"/>
            <ReviewCard name="Aizah"/>

        </div>
        <button className='wrapper-btn' onClick={forward}><i class="fa-solid fa-greater-than"></i></button>
        {/* <div className='wrapper-btn' onClick={forward}><i class="fa-solid fa-greater-than"></i></div> */}
    </div>
    </div>
    </>
    
  )
}
