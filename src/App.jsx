import { useState } from 'react'

import './App.css'
import ActivationButton from './components/ActivationButton';
import QuoteBox  from './components/QuoteBox '; 
import Phrases from './Phrases.json'

function App() {
  const [index, setIndex] = useState(Math.floor(Math.random() * Phrases.length));
  
  const indexRandom = () => {
    setIndex(Math.floor(Math.random() * Phrases.length));
  }

  const colors = [
    '#845AEC',
    '#5AC3EC',
    '#A3EC5A',
    '#EC5AB6',
    '#EC5A5C',
    '#C2EC5A',
    '#5A68EC',
    '#EC5AC0',
    '#5A6DEC',
    '#5AB9EC',
  ];

  
  const randomColorIndex = Math.floor(Math.random() * colors.length);
  document.body.style = `background: ${colors[randomColorIndex]}`;

  return (
    <>
      <div className="App" style={{backgroundColor: colors[randomColorIndex]}}>
        <div className='container'>
          <QuoteBox index={index} colors ={colors} randomColorIndex={randomColorIndex}/>
          <ActivationButton indexRandom={indexRandom} colors ={colors} randomColorIndex={randomColorIndex}/>
        </div>
        
      
      </div>
    
    </>
    
  )
}

export default App
