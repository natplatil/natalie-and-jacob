import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          RSVP
        </p>
        <p className='footer-subscription-text'>
          Let us know if you can make it!
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>RSVP</Button>
          </form>
        </div>
      </section>
      
   
     
    </div>
  );
}

export default Footer;
