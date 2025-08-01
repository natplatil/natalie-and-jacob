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
            
            <div className='schedule-item'>
              <div className='time'>7:00 PM</div>
              <div className='event'>
                <h3>Pizza Dinner</h3>
                <p>[Guest List]</p>
                <p>[Restaurant Name]</p>
              </div>
            </div>

            <div className='schedule-item'>
              <div className='time'>9:00 PM</div>
              <div className='event'>
                <h3>[Drinks?]</h3>
                <p>[Guest List]</p>
                <p>[Hotel Bar/Venue]</p>
              </div>
            </div>
          </div>

          {/* Friday Schedule */}
          <div className='schedule-section'>
            <img src={`${process.env.PUBLIC_URL}/images/stelvio2.jpg`} alt='Wedding Day' className='schedule-image' />
            <h1>Wedding Day</h1>
            <h2>Friday, June 12th</h2>
            
            <div className='schedule-item'>
              <div className='time'>5:00 PM</div>
              <div className='event'>
                <h3>Welcome Drinks at Wedding Venue</h3>
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
                <p>Venue Closes at 1:30 AM</p>
              </div>
            </div>
          </div>

          {/* Saturday Schedule */}
          <div className='schedule-section'>
            <img src={`${process.env.PUBLIC_URL}/images/stelvio3.JPG`} alt='Post-Wedding' className='schedule-image' />
            <h1>Post-Wedding</h1>
            <h2>Saturday, June 13th</h2>
            
            <div className='schedule-item'>
              <div className='time'>11:00 AM</div>
              <div className='event'>
                <h3>[Some activity]</h3>
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
