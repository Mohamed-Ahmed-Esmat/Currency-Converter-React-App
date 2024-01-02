// Footer.jsx

import React from 'react';

const Footer = () => {
  const styles = {
    container: {
      backgroundColor: '#222',
      color: '#fff',
      padding: '20px',
      textAlign: 'center',
    },
    text: {
      fontSize: '1.2em',
    },
    link: {
      color: '#E4C732',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
  };

  return (
    <footer style={styles.container}>
      <p style={styles.text}>
        © 2024 ConCurrency. All rights reserved. | Designed by{' '}
        <a href="" target="_blank" rel="noopener noreferrer" style={styles.link}>
          Mohamed Esmat
        </a>
      </p>
    </footer>
  );
};

export default Footer;
