import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video 
        src='/videos/proposalvid.mp4' 
        autoPlay 
        loop 
        muted 
        playsInline
        preload="auto"
      />
      <h1>Natalie & Jacob</h1>
      <p>We're Getting Married!</p>
      <p>In Lerici, Italy on June 12th 2026</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          path='/sign-up'
        >
          RSVP
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          path='/services'
          onClick={() => console.log('hey')}
        >
          OUR STORY <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
