import React from 'react';
import Footer from '../Footer';

export default function Destination() {
  return (
    <>
      <div className='destination'>
      </div>
      <div className='destination-container'>
        <div className='info-wrapper'>
          <h2>Explore the hidden waterfall inside the Amazon Jungle</h2>
          <p>Visit the Amazon Jungle, admire the hidden waterfalls, and enjoy a kayak tour while gliding through the pea-green water and vines to reach glistening rocks and water vapour glinting in the sunlight. Join this real adventurous thrill with us!</p>

          <h3>Experience</h3>
          <h4>Highlights</h4>
          <ul>
            <li>Explore the Maruaga Cave complex in the middle of the Amazon jungle </li>
            <li>Swim in natural pools and refreshing rapids on this amazing tour </li>
            <li>Enjoy an easy hike through the stunning Amazon rainforest </li>
            <li>Visit the Judea Cave and bathe in the beautiful waterfall </li>
          </ul>
          <h4>Full description</h4>
          <p>Explore the paradise of Presidente Figueiredo on a full-day tour from Manaus. Swim in a stunning waterfall, visit incredible caves, and get in touch with nature as you hike through the beautiful Amazon rainforest. After pickup at 7:00 AM/7:30 AM, travel along highway 174 to the Maruaga Caves Park where your tour begins. </p>
          <p>Hike through diverse landscapes as you admire the trees, vines, and native birds. After approximately 2 kilometers, you'll reach the entrance to a giant sandstone cave that is covered by waterfall for part of the year. Enter the cave to see markings made by former residents, keeping a look out for the local wildlife. </p>
          <p>Continue through the cave system, sometimes wading through water, to reach the fantastic Judea Cave where you can swim in the waterfall. Afterwards, return to the vehicle and drive to Urubuí to see the stunning rapids that cut through the city. Stop for bathing, and to enjoy a lunch of fish or roast beef with a soft drink. </p>
        </div>
        
      
        <div className='booking-container'>
          <div className='booking-wrapper'>
            <section className='booking-info'>
              <h5>From</h5>
              <p className='price'>€ 78</p>
              <p className='per-person'>per person</p>
            </section>
            <button type='button' className='btn-book'>Book now</button>
          </div>
        </div>
      
      </div>
      <Footer />
    </>
  );
}
