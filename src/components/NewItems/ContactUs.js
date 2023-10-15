import React from 'react';
import "./ContactUs.css"

export default function ContactUs() {
  return (
    <div className='contactUs'>
      <div className='contact-div'>
        <div className='contact-first-div'>
            <div>
                <h1>Contact</h1>
            </div>
            <div className='cfa-div'>
            <p>------------------------------------------------------------------------------------</p>
            <p>We're here to assist you on your journey of exploration and discovery. Whether you have 
                questions, need travel recommendations, or require any assistance with planning your next 
                adventure, our dedicated team at <b>TZorts</b> is just a message away. Your travel 
                experience matters to us, and we're committed to ensuring that you have a memorable and 
                stress-free adventure. Feel free to reach out to us, and we'll be delighted to help you 
                create unforgettable memories. Your dream vacation is just an inquiry away</p>
            <p><b>Email: </b> queries@travlers.com</p>
            <p><b>Phone: </b> +92 322 543217</p>
            <p><b>Address: </b>Garden Hight 8, Aibak Block New Garden Town, Karachi, Pakistan.</p>
            </div>
            <div className='cfb-div'>
                <h2>What You Get When Asking Your Questions</h2>
                <ul >
                    <li className='contact-ul'>Less than 12 hours to responed to your questions.</li>
                    <li className='contact-ul'>Thoroughness and experties of a Certified Exchange Specialist</li>
                    <li className='contact-ul'>Plan of action summarized in an email follow up.</li>
                </ul>
            </div>
            <div className='cfc-div'>
                <h3 className='contact-heading'>Fill the Form</h3>
            <form>
          <div >
            <label>Name: </label><br></br>
            <input type="text" name="name"/>
          </div>
          <div>
            <label>Email: </label><br></br>
            <input type="email" name="email" />
          </div>
          <div>
            <label>Phone Number: </label><br></br>
            <input type="number" name="number" />
          </div>
          <div>
            <label>Message: </label><br></br>
            <textarea name="message"/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
        
            
        </div >
        <div className="contact-second-div">
            <div className='sec-first-div'>
                <p>Call is at <b>+92 322 543217</b></p>
            </div>
            <div className='sec-sec-div'> </div>
            <div className='sec-third-div'>
                <img alt='kj' src='https://img.freepik.com/premium-photo/words-with-contact-us-business-concept-idea_352439-357.jpg'></img>
            </div>
            <div className='sec-sec-div'>
            </div>
            <div className='sec-fifth-div'>
                <h3>Read Me!</h3>
                    <li>At Adventure Seekers, we're passionate about travel and exploration.</li>
                    <li>If you have any questions or need assistance, please don't hesitate to get in touch with us.</li>
                    <li>Stay connected with us on social media for the latest travel updates and community engagement.</li>
                    <li>Your feedback is essential to us. If you have any suggestions, questions, or concerns, please feel free to reach out.</li>
            </div>
            <div className='sec-sec-div'> </div>
            
            <div className='sec-fourth-div'>
            </div>
        </div>
      </div>
    </div>
  )
}
