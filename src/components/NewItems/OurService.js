import React, { useState } from 'react'
import "./OurService.css"
export default function OurServices() {
    const [cards] = useState([
        {
            class: "fa-solid fa-globe fa-beat",
            title: "WorldWide Tours",
            text: `Lorecjksd cdjnskd sdbnkf   asdjb
            kdjd ajsd kjd ajsdb j jdbh xnd n dj kjwe
            sdkjbdfjkwe dwjdb jhdbw jndbwjd wjhdwjd
            sdjd sjv ehdj jhdwjd jhwdwjh wjdfwjb wjhdwjd
            ed kwjsf wjkdsdj kjdkdjb nmdjkdb mjwdkj 
            jdb`
        },
        {
            class: "fa-solid fa-hotel fa-beat",
            title: "Hotel Reservation",
            text: `Lorecjksd cdjnskd sdbnkf   asdjb
            kdjd ajsd kjd ajsdb j jdbh xnd n dj kjwe
            sdkjbdfjkwe dwjdb jhdbw jndbwjd wjhdwjd
            sdjd sjv ehdj jhdwjd jhwdwjh wjdfwjb wjhdwjd
            ed kwjsf wjkdsdj kjdkdjb nmdjkdb mjwdkj 
            jdb`
        },
        {
            class:"fa-solid fa-user fa-beat",
            title: "Travel Guide",
            text: `Lorecjksd cdjnskd sdbnkf   asdjb
            kdjd ajsd kjd ajsdb j jdbh xnd n dj kjwe
            sdkjbdfjkwe dwjdb jhdbw jndbwjd wjhdwjd
            sdjd sjv ehdj jhdwjd jhwdwjh wjdfwjb wjhdwjd
            ed kwjsf wjkdsdj kjdkdjb nmdjkdb mjwdkj 
            jdb`
        },
        {
            class:"fa-solid fa-plane fa-beat",
            title: "Tourist Routes",
            text: `Lorecjksd cdjnskd sdbnkf   asdjb
            kdjd ajsd kjd ajsdb j jdbh xnd n dj kjwe
            sdkjbdfjkwe dwjdb jhdbw jndbwjd wjhdwjd
            sdjd sjv ehdj jhdwjd jhwdwjh wjdfwjb wjhdwjd
            ed kwjsf wjkdsdj kjdkdjb nmdjkdb mjwdkj 
            jdb`
        },
        {
            class:"fa-solid fa-ship fa-beat",
            title: "Cruise Services",
            text: `Lorecjksd cdjnskd sdbnkf   asdjb
            kdjd ajsd kjd ajsdb j jdbh xnd n dj kjwe
            sdkjbdfjkwe dwjdb jhdbw jndbwjd wjhdwjd
            sdjd sjv ehdj jhdwjd jhwdwjh wjdfwjb wjhdwjd
            ed kwjsf wjkdsdj kjdkdjb nmdjkdb mjwdkj 
            jdb`
        },
        {
            class:"fa-solid fa-car fa-beat",
            title: "Transport",
            text: `Lorecjksd cdjnskd sdbnkf   asdjb
            kdjd ajsd kjd ajsdb j jdbh xnd n dj kjwe
            sdkjbdfjkwe dwjdb jhdbw jndbwjd wjhdwjd
            sdjd sjv ehdj jhdwjd jhwdwjh wjdfwjb wjhdwjd
            ed kwjsf wjkdsdj kjdkdjb nmdjkdb mjwdkj 
            jdb`
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
                            
                            <h3><i class={card.class} style={{float:"left", color:'#339310'}}></i>{card.title}</h3>
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
