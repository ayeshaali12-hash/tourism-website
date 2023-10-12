import React from 'react';
import GuideData from './GuideData';
import "./GuideData.css";

export default function Guide() {
  return (
    <>
    <h1 className='guide-h1'>Meet Our Guide</h1>
    <div className='guide-app'>
        
      <div class="guide-wrapper">
        <div class="guide-carousel">
            <GuideData name="Ayesha Ali"/>  
            <GuideData name="Ahmed Zai"/>  
            <GuideData name="Ashar Khan"/>  
            <GuideData name="Alisha Hameed"/>  

        </div>
    </div>
    </div>
    </>
  )
}
