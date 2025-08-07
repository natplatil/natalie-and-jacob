import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Let us know if you can make it!
        </p>
       
     
            <Button buttonStyle='btn--outline'>RSVP</Button>
 
      </section>
      
   
     
    </div>
  );
}

export default Footer;
