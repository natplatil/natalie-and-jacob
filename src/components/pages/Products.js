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
          <p className='intro-text'> Here are some reccomendations on where to stay and best airports to travel through.</p>
      
          <div className='hotel-grid'>
            
            <div className='hotel-card'>
              <h3>Lerici Hotel San Terenzo</h3>
              <div className='hotel-details'>
                <p><strong>[insert]</strong></p>
                <p>Via S. Biaggini, 42, 19032 San Terenzo SP, Italy</p>
                <p>📞+39 0187 967332 </p>
                <p>💰€195-295 per night</p>
              </div>
              <div className='hotel-description'>
                <p>[Description]</p>
                <p>[Distance]</p>
                  
              </div>
            </div>

            <div className='hotel-card'>
              <h3>Hotel Florida</h3>
              <div className='hotel-details'>
                <p><strong>[insert]</strong></p>
                <p>Via S. Biaggini, 35, 19032 Lerici SP, Italy</p>
                <p>📞+39 0187 967332 </p>
                <p>💰€190-230 per night</p>
              </div>
              <div className='hotel-description'>
                <p>[Description]</p>
                <p>Distance: 600m to Villa Marigola</p>
                  
              </div>
            </div>

            <div className='hotel-card'>
              <h3>Hotel Byron</h3>
              <div className='hotel-details'>
                <p><strong>Luxury Option</strong></p>
                <p>Via S. Biaggini, 19, 19032 Lerici SP, Italy</p>
                <p>https://hotelbyronlerici.com/it/</p>
                <p>📞 +39 0187 761530</p>
                <p>💰 €150-280 per night</p>
              </div>
              <div className='hotel-description'>
                <p>[info]</p>
                <p><strong>Distance:</strong> 950m to Villa Marigola</p>
                <p><strong>Amenities:</strong> Pool, spa, restaurant</p>
              </div>
            </div>

            <div className='hotel-card'>
              <h3>Hotel Shelley e delle Palme</h3>
              <div className='hotel-details'>
                <p><strong>[type]</strong></p>
                <p>Via S. Biaggini, 5, 19032 Lerici SP, Italy</p>
                <p>http://www.hotelshelley.it/</p>
                <p>📞 +39 0187 968204</p>
                <p>💰 €120-200 per night</p>
              </div>
              <div className='hotel-description'>
                <p>[info]</p>
                <p><strong>Distance:</strong> 1.3km to Villa Marigola</p>
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
                {/* <p><strong>Casa del Mare B&B</strong> - Cozy family-run B&B</p>
                <p><strong>Locanda Miranda</strong> - Traditional Italian inn</p>
                <p><strong>Airbnb Options</strong> - Private apartments and villas</p> */}
                <p>[insert more info]</p>
              </div>
            </div>

          </div>

          <div className='map-container'>
            <img 
              src={`${process.env.PUBLIC_URL}/images/hotel_map.png`} 
              alt="Map of hotel locations in Lerici"
              className="accommodation-map small"
            />
          </div>

          <div className='travel-info'>
            <h3>Getting to Lerici</h3>
            <div className='travel-grid'>
              <div className='travel-option'>
                <h4>✈️ By Plane</h4>
                <p><strong>Closest Airport:</strong> Pisa Airport (PSA)</p>
                <p><strong>Distance:</strong> ~1 hour by car</p>
                <br />
                <p><strong>Next Airport:</strong>Genoa Airport (GOA)</p>
                <p><strong>Distance:</strong> ~1.5 hours by car</p>
                <br />
                <p><strong>Further Airports:</strong> Several Airports in Milan: (LIN), (MXP)  </p>
                <p><strong>Distance:</strong> 3+ hours by car</p>

                
              </div>
              
              <div className='travel-option'>
                <h4>🚂 By Train</h4>
                <p><strong>Station:</strong> La Spezia Centrale</p>
                <p><strong>From Station:</strong> 15 minutes by bus/taxi to Lerici</p>
                <p><strong>High-speed rail:</strong> Direct from Milan</p>
              </div>
              
              <div className='travel-option'>
                <h4>🚗 By Car</h4>
                <p><strong>From Pisa:</strong> ~ 1 hour</p>
                <p><strong>From Milan:</strong> 2.5-3 hours</p>
                <p><strong>Parking:</strong> Available at most hotels or large public parking lots</p>
              </div>
            </div>

          </div>
                <div className='map-container'>
            <img 
              src={`${process.env.PUBLIC_URL}/images/cove_map.png`} 
              alt="Map of hotel locations in Lerici"
              className="accommodation-map small"
            />
          </div>

        </div>
      </div>
    </div>
  );
}
