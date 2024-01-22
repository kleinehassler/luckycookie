
import './App.css';
import RandomPhrase from './components/RandomPhrase';
import phrases from "./utils/phases.json";
import randomIndex from './services/randomindex';
import { useState } from 'react';
import ButtonPhase from './components/ButtonPhase';
import bgArray from './utils/bgArray.json';

function App() {

  const sentence = randomIndex(phrases);
  const bgImg = randomIndex(bgArray);
  const [quote, setQuote] = useState(sentence);
  const [bgApp, setBgApp] = useState(bgImg);

  const bgStyle = {
     backgroundImage: `url('../assets/fondo${bgApp}.jpg')`,
  }

  return (
    <div className='app' style={bgStyle}>
      <div className='container'>
        <h1>Galleta de la Fortuna de Programadores</h1>
        <ButtonPhase 
          setQuote={setQuote}
          setBgApp={setBgApp}
        />

        <RandomPhrase 
          quote={quote}
        />
        
      </div>
    </div>
    
  )
}

export default App
