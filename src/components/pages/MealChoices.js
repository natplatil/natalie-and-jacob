import React from 'react';
import '../../App.css';
import './MealChoices.css';

export default function MealChoices() {
  return (
    <div>
      {/* Hero section with background image */}
      <div className='meal-choices'>
        <h1>Meal Choices</h1>
      </div>
      
      {/* Content section */}
      <div className='meal-choices-container'>
        <div className='meal-choices-section'>
          <h2>Wedding Menu</h2>
          <p className='intro-text'>
            Please select your meal preferences for our wedding celebration. 
            We'll be serving a delicious Italian feast prepared by local chefs.
          </p>
          
          <div className='menu-section'>
            <h3>Appetizers</h3>
            <div className='menu-grid'>
              
              <div className='menu-card'>
                <div className='menu-icon'>🧀</div>
                <h4>Antipasto Italiano</h4>
                <p>
                  A selection of local cheeses, cured meats, olives, and marinated vegetables 
                  from the Liguria region.
                </p>
              </div>

              <div className='menu-card'>
                <div className='menu-icon'>🦐</div>
                <h4>Seafood Crudo</h4>
                <p>
                  Fresh local seafood prepared with lemon, olive oil, and herbs, 
                  showcasing the flavors of the Mediterranean.
                </p>
              </div>

            </div>
          </div>

          <div className='menu-section'>
            <h3>Main Courses</h3>
            <div className='menu-grid'>
              
              <div className='menu-card'>
                <div className='menu-icon'>🐟</div>
                <h4>Branzino al Sale</h4>
                <p>
                  Fresh Mediterranean sea bass baked in sea salt, served with seasonal vegetables 
                  and Ligurian olive oil.
                </p>
              </div>

              <div className='menu-card'>
                <div className='menu-icon'>🥩</div>
                <h4>Osso Buco</h4>
                <p>
                  Traditional Italian braised veal shanks with vegetables, white wine, 
                  and broth, served with risotto alla milanese.
                </p>
              </div>

              <div className='menu-card'>
                <div className='menu-icon'>🌱</div>
                <h4>Vegetarian Pesto Pasta</h4>
                <p>
                  Fresh pasta with traditional Genovese basil pesto, pine nuts, 
                  and local vegetables from the region.
                </p>
              </div>

            </div>
          </div>

          <div className='menu-section'>
            <h3>Dessert</h3>
            <div className='menu-grid'>
              
              <div className='menu-card'>
                <div className='menu-icon'>🍰</div>
                <h4>Wedding Cake</h4>
                <p>
                  Traditional Italian wedding cake with layers of sponge, 
                  fresh cream, and seasonal Italian fruits.
                </p>
              </div>

              <div className='menu-card'>
                <div className='menu-icon'>🍨</div>
                <h4>Gelato Selection</h4>
                <p>
                  Artisanal gelato featuring classic Italian flavors: 
                  pistachio, stracciatella, and limoncello.
                </p>
              </div>

            </div>
          </div>

          <div className='dietary-info'>
            <h3>Dietary Requirements</h3>
            <p>
              Please let us know about any allergies or dietary restrictions when you RSVP. 
              We can accommodate vegetarian, vegan, and gluten-free options.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
