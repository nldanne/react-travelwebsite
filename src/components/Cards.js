import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these epic destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem 
            src="img-9.jpg"
            text="Explore the hidden waterfall deep inside the Amazon Jungle"
            label="Adventure"
            path="/services"
            ></CardItem>
            <CardItem 
            src="img-2.jpg"
            text="Travel through the Islands of Bali in a Private Cruise"
            label="Luxury"
            path="/services"
            ></CardItem>
          </ul>
          <ul className='cards__items'>
            <CardItem 
            src="img-4.jpg"
            text="Experience Football on Top of the Himalayan Mountains"
            label="Adventure"
            path="/services"
            ></CardItem>
            <CardItem 
            src="img-3.jpg"
            text="Set a Sail in the Atlantic ocean visiting Uncharted Waters"
            label="Mystery"
            path="/services"
            ></CardItem>
            <CardItem 
            src="img-8.jpg"
            text="Ride through the Sahara Desert on a guided camel tour"
            label="Adrenaline"
            path="/services"
            ></CardItem>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;
