import React from 'react';
import CardItem from '../CardItem';
import Footer from '../Footer';

import '../../App.css';
import '../Cards.css';
import './Services.css';

export default function Services() {
  return (
    <>
      <h1 className='services'>SERVICES</h1>
      <section className='heading'>
        <h2>Activities we think you would enjoy</h2>
        <div className='services-container'>
          <div className='services-wrapper'> 
          <ul className='services-items'>
            <CardItem 
              src="img-9.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="img-2.jpg"
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="img-4.jpg"
              text="Experience Football on Top of the Himalayan Mountains"
              label="Adventure"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="img-3.jpg"
              text="Set a Sail in the Atlantic ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="img-8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/services/activity"
            ></CardItem>
          </ul>
          </div>
        </div>
      </section>

      <section className='heading'>
        <h2>Explore these destinations</h2>
        <div className='services-container'>
          <div className='services-wrapper'> 
          <ul className='services-items'>
            <CardItem 
              src="destination-1.jpg"
              text="Budapest, Hungary"
              label="Europe"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="destination-2.jpg"
              text="Lisbon, Portugal"
              label="Europe"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="destination-3.jpg"
              text="Berlin, Germany"
              label="Europe"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="destination-4.jpg"
              text="London, England"
              label="Europe"
              path="/services/activity"
            ></CardItem>
            <CardItem 
              src="destination-5.jpg"
              text="Delft, Holland"
              label="Europe"
              path="/services/activity"
            ></CardItem>
          </ul>
          </div>
        </div>
      </section>
      <Footer />
    </>
  
  
  );
}