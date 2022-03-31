import { useState, useEffect } from "react";

function GameBoard({word}) {

    // function to check if a char is a letter using regex
    const isChar = (char) => {
        return (/[a-zA-Z]/).test(char);
    };

    // create our callback to check if the letter for a keydown is in the word and update our blanks
    const guess = (event) => {
        
        const letter = event.key;

        // check to see if we have gussed incorrectly to many times
        if (layout.mistakes >= 6) { 
            return;
        }

        if(!word.includes(letter)) {

            const mistakes = ++layout.mistakes;

            if (mistakes >= 6 ) {

                alert("Failed"); // this is where we will display that the game is over

            }

            setLayout({...layout, mistakes});
        }

        const newBlanks = [...layout.blanks].map((elem, indx) => word[indx] === letter ? <span key={indx}>{letter }</span> : elem);

        setLayout({...layout, blanks: newBlanks});

    };

    useEffect(() => {

        window.addEventListener("keydown", guess);

        return () => {
            window.removeEventListener("keydown",guess)
        };

    },);

    // create our blanks based on our word
    const blanks = [...word].map((char, indx) => isChar(char) ? <span key={indx}>_ </span>: <span key={indx}>---</span>);

    // create our layout for the gameboard using the blanks
    const [layout, setLayout] = useState({blanks, mistakes: 0});

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