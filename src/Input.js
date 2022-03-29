import { useState } from "react";

function Input({saveWord}) {

    const [word, setWord] = useState("");

    // update the word whenever the input is changed
    const updateWord = (event) => {

        const change = event.target.value;

        setWord(change);

    };

    // save the word when the button is pressed and start the game
    const startGame = () => {
        saveWord(word)
    }

    return (
        <>
        <input onChange={updateWord} type="text" minlenght="1" placeholder="Enter a word..." required/>
        <button onClick={startGame}>Start Game</button>
        </>
    );
}

export default Input;