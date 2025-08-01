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
            We'll be serving a delicious Italian feast prepared by local chefs.
            Which will consist of two appetizers, a main course with vegetable-based sides and dessert will be the wedding cake.
          </p>
          
          <div className='menu-section'>
            <h3>Two Appetizers</h3>
            <div className='menu-grid'>
              
              <div className='menu-card'>
                <div className='menu-icon'>🍝</div>
                <h4>Pasta Dish</h4>
                <p>
                 [TBD]
                </p>
              </div>

              <div className='menu-card'>
                <div className='menu-icon'>🍚</div>
                <h4>Risotto dish</h4>
                <p>
                  [TBD]
                </p>
              </div>

            </div>
          </div>

          <div className='menu-section'>
            <h3>One Main Course</h3>
            <div className='menu-grid'>
              
    
              <div className='menu-card'>
                <div className='menu-icon'>🥩or🐟</div>
                <h4>[TBD]</h4>
                <p>
                  [TBD]
                </p>
              </div>

              <div className='menu-card'>
                <div className='menu-icon'>🌱</div>
                <h4>Vegetable-Based Side Dish</h4>
                <p>
                  [TBD]
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
                  [insert type]
                </p>
              </div>



            </div>
          </div>

          <div className='dietary-info'>
            <h3>Dietary Requirements</h3>
            <p>
              Please let us know about any allergies or dietary restrictions when you RSVP. 
              We can accommodate vegetarian, vegan, and gluten-free options.
              Also let us know if you need a kids menu in the RSVP.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
