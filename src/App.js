import { useState } from 'react';
import './App.css';
import Input from './Input';
import GameBoard from './GameBoard';

function App() {

  const [isPlaying, setIsPlaying] = useState(false);
  const word = window.localStorage.getItem("word");

  // check for a non empty word and update playing state if we have a word
  const saveWord = (word) => {

    if (word.length > 0){

      window.localStorage.setItem("word", word);
      setIsPlaying(true);

    } else { 

      setIsPlaying(false);

    }

  };

  return (
    <div className="App">
      <h1>_HangMan_</h1>
      <div className="Game">
          {!isPlaying ? <Input saveWord={saveWord}/> : <GameBoard word={word}/> }  
      </div>
    </div>
  );
}

export default App;
