import { useState } from 'react';
import './App.css';
import Input from './Input';

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
      {!isPlaying ? <Input saveWord={saveWord}/> : <span>{word}</span>}
    </div>
  );
}

export default App;
