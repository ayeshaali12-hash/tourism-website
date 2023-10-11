import React, { useEffect, useState } from 'react';
// import "./BackToTop.css";

export default function BackToTop() {
    const [backToTopButton, setBackToTopButton] = useState(false);
    useEffect(() =>{
        window.addEventListener("scroll", () => {
            if(window.scrollY>100){
                setBackToTopButton(true);
            }else{
                setBackToTopButton(false);
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
  return (
    <div>
      {backToTopButton && (
        <button style={{position: "fixed", bottom: "50px",
            right: "40px",
            height: "50px",
            width: "50px", 
            fontSize: "20px",
            borderRadius:"50%"}} onClick={scrollUp}>
                <i class="fa-solid fa-chevron-up fa-beat-fade"></i>
            </button>
      )}
    </div>
  )
}
