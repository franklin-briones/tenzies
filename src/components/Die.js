import React from 'react';

function Die(props) {
  return (
    <div className="die">
      <h3 className="die-num">{props.value}</h3>
    </div>
  );
}

export default Die;
