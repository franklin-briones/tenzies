import React from 'react';

function Die(props) {

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "#ffffff"
    }

  return (
    <div className="die" style={styles}>
        <h3 className="die-num">{props.value}</h3>
    </div>
    
  );
}

export default Die;
