import React from 'react'
import "./Carousel.css";

export default function Carousel(props) {
  return (
    <div>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item data-bs-interval active" data-bs-interval="3000">
                    <img src="https://images.unsplash.com/photo-1625190273603-0f5814961433?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" className="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        <h2 className='carousel-h2'>{props.heading}</h2>
                        <p className='stylee'>{props.text}</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img src="https://images.unsplash.com/photo-1555400038-63f5ba517a47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" className="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        <h2 className='carousel-h2'>{props.heading}</h2>
                        <p className='stylee'>{props.text}</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1933&q=80" className="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block ">
                        <h2 className='carousel-h2'>{props.heading}</h2>
                        <p className='stylee'>{props.text}</p>
                    </div>
                </div>
                <div className="carousel-item"  data-bs-interval="3000">
                    <img src="https://images.unsplash.com/photo-1564506414752-a73fbe0c6b00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" className="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        <h2 className='carousel-h2'>{props.heading}</h2>
                        <p className='stylee'>{props.text}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
