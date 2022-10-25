
import Phrases from '../Phrases.json'
import React, { useState } from 'react';

const QuoteBox  = ({index, randomColorIndex, colors}) => {

  return (
    <div className = 'phraseContainer'>
      <div className='phrase'>
        <i className="fa-solid fa-quote-left" style={{color: colors[randomColorIndex]}}></i>
        <p style={{color: colors[randomColorIndex]}}>{Phrases[index].quote}</p>
      </div>
      <div className='author'>
        <p style={{color: colors[randomColorIndex]}}><i>{Phrases[index].author}</i></p>
      </div>
    </div>
  );
};

export default QuoteBox ;