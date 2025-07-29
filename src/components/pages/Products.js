import React from 'react';
import '../../App.css';
import './Products.css';

export default function Products() {
  return (
    <div>
      {/* Hero section with background image */}
      <div className='products'>
        <h1>Accommodation</h1>
      </div>
      
      {/* Accommodation content below the image */}
      <div className='accommodation-container'>
        
        <div className='accommodation-section'>
          <h2>Where to Stay in Lerici</h2>
          <p className='intro-text'>We've reserved room blocks at these beautiful hotels for our wedding guests. Please mention our wedding when booking.</p>
          
          <div className='hotel-grid'>
            
            <div className='hotel-card'>
              <h3>Hotel Florida</h3>
              <div className='hotel-details'>
                <p><strong>[insert]</strong></p>
                <p>[address]</p>
                <p>📞 </p>
                <p>💰 € per night</p>
              </div>
              <div className='hotel-description'>
                <p>Historic villa with stunning sea views. This is where our ceremony and reception will take place.</p>
                <p><strong>Room Block:</strong> Available until May 1st, 2026</p>
                <p><strong>Mention:</strong> "Natalie & Jacob Wedding"</p>
              </div>
            </div>

            <div className='hotel-card'>
              <h3>Hotel Byron</h3>
              <div className='hotel-details'>
                <p><strong>Luxury Option</strong></p>
                <p>Via Biaggini, 19032 Lerici SP, Italy</p>
                <p>📞 +39 0187 967104</p>
                <p>💰 €150-280 per night</p>
              </div>
              <div className='hotel-description'>
                <p>Elegant hotel in the heart of Lerici with panoramic sea views and spa facilities.</p>
                <p><strong>Distance:</strong> 5 minutes walk to venue</p>
                <p><strong>Amenities:</strong> Pool, spa, restaurant</p>
              </div>
            </div>

            <div className='hotel-card'>
              <h3>Hotel Shelley e delle Palme</h3>
              <div className='hotel-details'>
                <p><strong>Historic Charm</strong></p>
                <p>Lungomare Biaggini, 19032 Lerici SP, Italy</p>
                <p>📞 +39 0187 968271</p>
                <p>💰 €120-200 per night</p>
              </div>
              <div className='hotel-description'>
                <p>Historic hotel with traditional Italian hospitality and beautiful terrace overlooking the Gulf.</p>
                <p><strong>Distance:</strong> 3 minutes walk to venue</p>
              </div>
            </div>

            <div className='hotel-card'>
              <h3>Budget-Friendly Options</h3>
              <div className='hotel-details'>
                <p><strong>Affordable Stays</strong></p>
                <p>Various locations in Lerici</p>
                <p>💰 €60-120 per night</p>
              </div>
              <div className='hotel-description'>
                <p><strong>Casa del Mare B&B</strong> - Cozy family-run B&B</p>
                <p><strong>Locanda Miranda</strong> - Traditional Italian inn</p>
                <p><strong>Airbnb Options</strong> - Private apartments and villas</p>
                <p>[insert more info]</p>
              </div>
            </div>

          </div>

          <div className='travel-info'>
            <h3>Getting to Lerici</h3>
            <div className='travel-grid'>
              <div className='travel-option'>
                <h4>✈️ By Plane</h4>
                <p><strong>Closest Airport:</strong> Pisa Airport (PSA)</p>
                <p><strong>Distance:</strong> 1.5 hours by car/train</p>
                <p><strong>Alternative:</strong> Genoa Airport (1 hour)</p>
              </div>
              
              <div className='travel-option'>
                <h4>🚂 By Train</h4>
                <p><strong>Station:</strong> La Spezia Centrale</p>
                <p><strong>From Station:</strong> 15 minutes by bus/taxi to Lerici</p>
                <p><strong>High-speed rail:</strong> Direct from Rome/Milan</p>
              </div>
              
              <div className='travel-option'>
                <h4>🚗 By Car</h4>
                <p><strong>From Pisa:</strong> 1.5 hours</p>
                <p><strong>From Milan:</strong> 3 hours</p>
                <p><strong>Parking:</strong> Available at most hotels</p>
              </div>
            </div>
          </div>

          

        </div>
      </div>
    </div>
  );
}
