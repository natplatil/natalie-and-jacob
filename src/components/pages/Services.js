import React from 'react';
import '../../App.css';
import './Services.css';

export default function Services() {
  return (
    <div>
      {/* Hero section with background image */}
      <div className='services'>
        <h1>Wedding Schedule</h1>
      </div>
      
      {/* Schedule content below the image */}
      <div className='schedule-container'>
        <div className='multi-day-schedule'>
          
          {/* Thursday Schedule */}
          <div className='schedule-section'>
            <img src={`${process.env.PUBLIC_URL}/images/stelvio1.jpg`} alt='Pre-Wedding' className='schedule-image' />
            <h1>Pre-Wedding</h1>
            <h2>Thursday, June 11th</h2>
            
            <div className='dress-code-section'>
              <h3>👗 Dress Code</h3>
              <p><strong>Semi-Formal or Dressy Casual</strong></p>
              <p>Think cocktail attire - dress nicely but comfortable for dinner and drinks!</p>
            </div>
            
            <div className='schedule-item'>
              <div className='time'>6:00 PM</div>
              <div className='event'>
                <h3>Pizza Party!</h3>
                <p>la marinella | Seaside Bistrot & Cocktail Bar</p>
                <p>Everyone is welcome!</p>

              </div>
            </div>

     
          </div>

          {/* Friday Schedule */}
          <div className='schedule-section'>
            <img src={`${process.env.PUBLIC_URL}/images/stelvio2.jpg`} alt='Wedding Day' className='schedule-image' />
            <h1>Wedding Day</h1>
            <h2>Friday, June 12th</h2>
            
            <div className='dress-code-section'>
              <h3>👔 Dress Code</h3>
              <p><strong>Formal or Black-Tie Optional</strong></p>
              <p>Formal evening wear - tuxedos, suits, cocktail dresses, or evening gowns. Let's dress to celebrate!</p>
            </div>
            
            <div className='schedule-item'>
              <div className='time'>5:00 PM</div>
              <div className='event'>
                <h3>Arrive at villa</h3>
                <p>Sit for ceremony</p>
                <p>Villa Marigola</p>
              </div>
            </div>

             <div className='schedule-item'>
              <div className='time'>5:30 PM</div>
              <div className='event'>
                <h3>Ceremony begins!</h3>
                <p>Throw rose petals</p>
              </div>
            </div>

            <div className='schedule-item'>
              <div className='time'>6:15 PM</div>
              <div className='event'>
                <h3>Champagne Toast in Garden</h3>
                <p>Get ready for the bouquet toss</p>
              </div>
            </div>

            <div className='schedule-item'>
              <div className='time'>7:15 PM</div>
              <div className='event'>
                <h3>Dinner begins</h3>
                <p> Plus toasts and speeches!</p>

              </div>
            </div>

            <div className='schedule-item'>
              <div className='time'>10:00 PM</div>
              <div className='event'>
                <h3>Cake Cutting</h3>
                <p>Yum</p>
              </div>
            </div>
              <div className='schedule-item'>
              <div className='time'>10:15 PM</div>
              <div className='event'>
                <h3>First Dance</h3>
                <p>and all the other dances</p>
              </div>
            </div>

            <div className='schedule-item'>
              <div className='time'>1:00 AM</div>
              <div className='event'>
                <h3>Closing tiiiiime (almost), one last call for alcohoool</h3>
                <p>Venue Closes at 1:30 AM</p>
              </div>
            </div>
          </div>

          {/* Saturday Schedule */}
          <div className='schedule-section'>
            <img src={`${process.env.PUBLIC_URL}/images/stelvio3.jpg`} alt='Post-Wedding' className='schedule-image' />
            <h1>Post-Wedding</h1>
            <h2>Saturday, June 13th</h2>
            
            <div className='dress-code-section'>
              <h3>🏊‍♀️ Dress Code</h3>
              <p><strong>Swimsuit</strong></p>
              <p>Casual beach/pool vibes - bring your swimwear and relax!</p>
            </div>
            
            <div className='schedule-item'>
              <div className='time'>11:00 AM</div>
              <div className='event'>
                <h3>Swims</h3>
                <p>[Something]</p>
                <p>[Location]</p>
              </div>
            </div>

            <div className='schedule-item'>
              <div className='time'>2:00 PM</div>
              <div className='event'>
                <h3>[Another acitivity]</h3>
                <p>[Location]</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
