import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Everything you need to know:</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/ring.jpg`}
              text='Wedding Info & Weekend Schedule'
              label='Schedule'
              path='/services'
            />
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/fiat.jpg`}
              text='Travel & Accommodation'
              label='Accomomodation'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/lerici_view.jpg`}
              text='Things To Do in Lerici'
              label='To Do'
              path='/thingstodo'
            />
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/villa_dinner.jpg`}
              text='Meal choices'
              label='Accomodation'
              path='/meal-choices'
            />
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/peeping.jpg`}
              text='RSVP Here'
              label='RSVP'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
