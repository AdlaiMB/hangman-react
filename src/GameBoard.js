import { useState, useEffect } from "react";

function GameBoard({word}) {

    // function to check if a char is a letter using regex
    const isChar = (char) => {
        return (/[a-zA-Z]/).test(char);
    };

    // function to check if we have finished the game
    const finished = (set1, set2) => {

        for (let char of set1) {

            if (!set2.has(char)) {

                return false;

            }
        }

        return true;
    }

    // create our callback to check if the letter for a keydown is in the word and update our blanks
    const guess = (event) => {
        
        const letter = event.key;

        // check to see if we have gussed incorrectly to many times or we have filled in all the blanks
        if (layout.mistakes >= 6 || finished(layout.chars, layout.correctGuesses)) { 
            return;
        }

        if(!layout.chars.has(letter)) {

            const mistakes = ++layout.mistakes;

            if (mistakes >= 6 ) {

                alert("Failed"); // this is where we will display that the game is over

            }

            setLayout({...layout, mistakes});
        }
        
        const correctGuesses = layout.correctGuesses.add(letter);
        const blanks = [...layout.blanks].map((elem, indx) => word[indx] === letter ? <span key={indx}>{letter }</span> : elem);

        setLayout({...layout, correctGuesses, blanks});

    };

    useEffect(() => {

        window.addEventListener("keydown", guess);

        return () => {
            window.removeEventListener("keydown",guess)
        };

    },);

    // create our blanks based on our word and a set for our chars
    const blanks = [...word].map((char, indx) => isChar(char) ? <span key={indx}>_ </span>: <span key={indx}>---</span>);
    const chars = new Set(word);
    const correctGuesses = new Set();
    const mistakes = 0;

    // removes white spaces from set

    chars.delete(" ");

    // create our layout for the gameboard using the blanks
    const [layout, setLayout] = useState({blanks, chars, correctGuesses, mistakes});

    return (
        <div>
            <span>
                tries: {layout.mistakes}
            </span>
            <br/>
            <span>
                {layout.blanks} 
            </span>
        </div>
    );
}

export default GameBoard;