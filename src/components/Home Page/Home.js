import React from 'react';
import backgroundImage from '../../assets/background.jpg';
import LandingBox from './LandingBox';

function Home() {
  return (
    <div className="bg-center bg-cover h-screen w-screen flex items-center justify-center" 
         style={{ backgroundImage: `url(${backgroundImage})` }}>
      <LandingBox />
    </div>
  );
}

export default Home;