import React from 'react';
import '../../App.css';
import './ThingsToDo.css';

export default function ThingsToDo() {
  return (
    <div>
      {/* Hero section with background image */}
      <div className='thingstodo'>
        <h1>Things to do in Lerici</h1>
      </div>
      
      {/* Content section */}
      <div className='things-to-do-container'>
        <div className='things-to-do-section'>
          <h2>What to do in Lerici?</h2>
          
          <div className='attractions-section'>
            <h3>Worth Seeing</h3>
            
            <div className='attraction-grid'>
              
              <div className='attraction-card'>
                <div className='attraction-icon'>🏰</div>
                <h4>Medieval Castle</h4>
                <p>
                  The medieval castle from the 14th century, which now houses the 
                  <strong> Paleontological Museum</strong> with a fascinating dinosaur exhibition.
                </p>
              </div>

              <div className='attraction-card'>
                <div className='attraction-icon'>⚓</div>
                <h4>Naval Museum</h4>
                <p>
                  Located in the harbor, this museum showcases the rich maritime 
                  history of Lerici and the surrounding Gulf of Poets.
                </p>
              </div>

              <div className='attraction-card'>
                <div className='attraction-icon'>⛪</div>
                <h4>San Francesco Church</h4>
                <p>
                  With its valuable artworks and beautiful architecture, 
                  this historic church is well worth a visit.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
