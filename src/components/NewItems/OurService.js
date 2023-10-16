import React, { useState } from 'react'
import "./OurService.css"
export default function OurServices() {
    const [cards] = useState([
        {
            class: "fa-solid fa-globe fa-beat",
            title: "WorldWide Tours",
            text: `Discover the world's most captivating destinations with Us. 
            We offer meticulously crafted itineraries, 
            ensuring the best of each location. From cultural 
            immersion to adventure-filled journeys, our tours guarantee unforgettable memories `
        },
        {
            class: "fa-solid fa-hotel fa-beat",
            title: "Hotel Reservation",
            text: `Finding the perfect accommodation with our Hotel Reservation 
            service. We provide a vast selection of hotels at competitive rates. 
            Choose from a range of options that suit your preferences 
            and enjoy a comfortable stay in your dream destination.`
        },
        {
            class:"fa-solid fa-user fa-beat",
            title: "Plane Tickets",
            text: `Take to the skies effortlessly with our Plane Tickets service. 
            We offer a convenient booking platform to secure the best airfare deals. 
            Whether it's a short or an international adventure, 
            we ensure you reach your destination safely and on time.`
        },
        {
            class:"fa-solid fa-plane fa-beat",
            title: "Travel Guide",
            text: `Enhance your travel experience with Us. Our 
            knowledgeable and friendly guides provide insights into the history, 
            culture, art & music of your destination. We'll make sure you 
            have a enriching journey filled with memorable anecdotes and hidden gems.`
        },
        {
            class:"fa-solid fa-ship fa-beat",
            title: "Cruise Services",
            text: `Set sail on unforgettable adventures with our Cruise Service. Explore 
            exotic and picturesque destinations on luxurious cruise ships. For vacations, 
            we have an array of cruise packages to cater 
            to your preferences and desires.`
        },
        {
            class:"fa-solid fa-car fa-beat",
            title: "Transport",
            text: `Simplify your transportation needs with Uss. We offer
             a variety of options, from private car rentals to shared shuttles, ensuring
             smooth and comfortable transfers during your trip. Travel with ease, 
              knowing that your transportation is well taken care of.`
        },
    ])
  return (
    <div>
      <section className='ser-section'>
        <div className='ser-container'>
            <h1 className='ser-h1'>Our Services</h1>
            <div className='ser-cards'>
                {
                    cards.map((card, i) => (
                        <div key={i} className='ser-card'>
                            
                            <h3><i class={card.class} style={{float:"left", color:'#008080'}}></i>{card.title}</h3>
                            <p className='OurServices-para'>{card.text}</p>
                            <button className='ser-btn'>Explore</button>
                        </div>
                    ))
                }
                
            </div>
        </div>
      </section>
    </div>
  )
}
