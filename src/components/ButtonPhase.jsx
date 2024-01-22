import React from 'react';
import phrases  from '../utils/phases.json';
import randomIndex from '../services/randomindex';
import bgArray from '../utils/bgArray.json';


const ButtonPhase = ({setQuote, setBgApp}) => {
    
    const handleButton = () => {
        const bgImg = randomIndex(bgArray);
        const sentence = randomIndex(phrases);
        setQuote(sentence);
        setBgApp(bgImg);
    }

  return (
    <button onClick={handleButton}>Probar mi Suerte</button>
  )
}

export default ButtonPhase