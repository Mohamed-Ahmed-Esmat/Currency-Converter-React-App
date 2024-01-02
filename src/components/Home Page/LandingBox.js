import Btn from "./Btn";

function LandingBox() {
  const styles = {
    box: {
      position: 'absolute', // Use absolute positioning for animation
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)', // Center the box
      width: '70%',
      height: '70%',
      background: 'linear-gradient(180deg, #7128BA 24%, rgba(24.90, 27.13, 80.75, 0.87) 60%, rgba(111.93, 36.93, 186.93, 0.77) 82%, #311151 100%), linear-gradient(0deg, rgba(26.97, 55.23, 203.56, 0.20) 0%, rgba(26.97, 55.23, 203.56, 0.20) 100%)',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: 15,
      animation: 'floatAnimation 3s ease-in-out infinite', // Add animation property
    },
    head: {
      color: 'black',
      fontSize: 48,
      fontFamily: 'Goblin One',
      fontWeight: 'bold',
      wordWrap: 'break-word',
    },
    subhead: {
      textAlign: 'center',
      color: '#A64E4E',
      fontSize: 30,
      fontFamily: 'Palatino',
      fontWeight: 'bold',
      letterSpacing: 0.44,
      wordWrap: 'break-word',
    },
  };

  return (
    <div style={styles.box}>
      <p style={styles.head}>ConCurrency</p>
      <p style={styles.subhead}>Make informed financial decisions. Reliable currency conversion, always.</p>
      <Btn text="Get Started" />
    </div>
  );
}

export default LandingBox;
