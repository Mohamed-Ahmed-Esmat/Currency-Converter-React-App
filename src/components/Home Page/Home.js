import React from 'react';
import backgroundImage from '../../assets/background.jpg';
import LandingBox from './LandingBox';

function Home() {
  const styles = {
    homeBackground: {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '100vh',  /* Full height of the viewport */
      width: '100vw',   /* Full width of the viewport */
      display: 'flex',  /* Center the LandingBox */
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  return (
    <div style={styles.homeBackground}>
      <LandingBox />
    </div>
  );
}

export default Home;
