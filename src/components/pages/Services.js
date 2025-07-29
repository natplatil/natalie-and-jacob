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
            <h2>Thursday, June 11th</h2>
            
            <div className='schedule-item'>
              <div className='time'>7:00 PM</div>
              <div className='event'>
                <h3>Rehearsal Dinner</h3>
                <p>Family and wedding party only</p>
                <p>[Restaurant Name]</p>
              </div>
            </div>

            <div className='schedule-item'>
              <div className='time'>9:00 PM</div>
              <div className='event'>
                <h3>Welcome Drinks</h3>
                <p>Open to all guests</p>
                <p>[Hotel Bar/Venue]</p>
              </div>
            </div>
          </div>

          {/* Friday Schedule */}
          <div className='schedule-section'>
            <h2>Friday, June 12th</h2>
            
            <div className='schedule-item'>
              <div className='time'>5:00 PM</div>
              <div className='event'>
                <h3>Welcome Drinks at Villa</h3>
                <p>Join us for drinks and appetizers</p>
                <p>Villa Marigola</p>
              </div>
            </div>

            <div className='schedule-item'>
              <div className='time'>6:00 PM</div>
              <div className='event'>
                <h3>Ceremony</h3>
                <p>Villa Marigola</p>
                <p>[Address]</p>
              </div>
            </div>

            <div className='schedule-item'>
              <div className='time'>7:30 PM</div>
              <div className='event'>
                <h3>Dinner</h3>
                <p>Villa Marigola</p>
              </div>
            </div>

            <div className='schedule-item'>
              <div className='time'>10:00 PM</div>
              <div className='event'>
                <h3>Cake Cutting</h3>
                <p>Villa Marigola</p>
                <p>Dinner, dancing, and celebration!</p>
              </div>
            </div>

            <div className='schedule-item'>
              <div className='time'>1:00 AM</div>
              <div className='event'>
                <h3>Last Dance</h3>
                <p>End of reception</p>
              </div>
            </div>
          </div>

          {/* Saturday Schedule */}
          <div className='schedule-section'>
            <h2>Saturday, June 13th</h2>
            
            <div className='schedule-item'>
              <div className='time'>11:00 AM</div>
              <div className='event'>
                <h3>Farewell Brunch</h3>
                <p>Casual goodbye gathering</p>
                <p>[Brunch Venue]</p>
              </div>
            </div>

            <div className='schedule-item'>
              <div className='time'>2:00 PM</div>
              <div className='event'>
                <h3>Hotel Checkout</h3>
                <p>Safe travels home!</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
