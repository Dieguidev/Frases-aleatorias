import React from 'react';

const ActivationButton = ({randomColorIndex, colors, indexRandom}) => {
  return (
    <div className='activacionButton'>
      <button onClick={indexRandom}  style={{backgroundColor: colors[randomColorIndex]}}><i className="fa-solid fa-arrow-right"></i></button>
    </div>
  );
};

export default ActivationButton;