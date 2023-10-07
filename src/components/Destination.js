import React from 'react'
import "./DestinationStyles.css";
import DestinationsData from './DestinationsData';

export default function Destination() {
  return (
    <div className='destination'>
      <h1>Popular Destination</h1>
      <p>Tours gives you the opportunity to see alot, within a time frame</p>
      <DestinationsData 
      className = "first-des"
      heading = 'Tall Volcanno, Batangas'
      text = "One of the most iconic view in Luzon, Mt. 
      Taal boasts a volcano inside a lake inside an island.
      If you fancy a closer look the hikeuto the crater is a mere 45 minutes,
      and is easy enough for beginners. Guides will assit
      you most of the way, and you'll see thr peculiar environment
      found on an active volcano, including volcanic rocks and
      stem vents. The hike can be dusty and hoy, so plan for an early
      morning trip, and then unwind with some bulalo before
      heading back home!!!"
      img1 = 'https://images.unsplash.com/photo-1578841459285-16c1c03b3473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
      img2 = 'https://images.unsplash.com/photo-1603725616907-82eb483d7dea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80'
      />

<DestinationsData 
      className = "first-des-reverse"
      heading = 'Mt. Danguldul, Batangas'
      text = "One of the most iconic view in Luzon, Mt. 
      Taal boasts a volcano inside a lake inside an island.
      If you fancy a closer look the hikeuto the crater is a mere 45 minutes,
      and is easy enough for beginners. Guides will assit
      you most of the way, and you'll see thr peculiar environment
      found on an active volcano, including volcanic rocks and
      stem vents. The hike can be dusty and hoy, so plan for an early
      morning trip, and then unwind with some bulalo before
      heading back home!!!"
      img1 = 'https://images.unsplash.com/photo-1687077897804-6339ec66f1e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80'
      img2 = 'https://images.unsplash.com/photo-1608321233442-6ea5d4f7dd34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80'
      />

      {/* <div className='first-des'>
        <div className='des-text'>
            <h2>Tall Volcanno, Batangas</h2>
            <p>One of the most iconic view in Luzon, Mt. 
                Taal boasts a volcano inside a lake inside an island.
                If you fancy a closer look the hikeuto the crater is a mere 45 minutes,
                and is easy enough for beginners. Guides will assit
                you most of the way, and you'll see thr peculiar environment
                found on an active volcano, including volcanic rocks and
                stem vents. The hike can be dusty and hoy, so plan for an early
                morning trip, and then unwind with some bulalo before
                heading back home!!!</p>
        </div>
        <div className='image'>
            <img alt='Tall Volcano' src='https://images.unsplash.com/photo-1578841459285-16c1c03b3473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'></img>
            <img alt='Tall Volcano' src='https://images.unsplash.com/photo-1603725616907-82eb483d7dea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1975&q=80'></img>
        </div>
      </div> */}

    </div>
  )
}
