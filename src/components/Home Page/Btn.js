// Btn.jsx

import React from 'react';

function Btn(props) {
  const styles = {
    box: {
    width: '15%', // Adjust the width as a percentage of the parent container
    height: '10%', // Adjust the height as a percentage of the parent container
    background: '#E4C732',
    borderRadius: 15,
  },
  text: {
    width: '100%',
    height: '100%',
    color: '#5F2BBE',
    fontSize: 24,
    fontFamily: 'Doppio One',
    fontWeight: '400',
    fontWeight: 'bold',
    wordWrap: 'break-word',
    textAlign: 'center', // Assuming you want the text centered
  },
}

  return (
    <button style={styles.box}>
        <span style={styles.text}>{props.text}</span>    
    </button>
  );
}

export default Btn;
