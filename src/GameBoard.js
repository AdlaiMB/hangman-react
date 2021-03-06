import { useState, useEffect } from "react";
import './GameBoard.css';
import Base from './Base';
import Incorrect from "./Incorrect";

function GameBoard({word}) {

    // function to add all chars to our chars set
    const setChars = (chars) => { 

        for (let wrd of word) {

            for (let char of wrd){

                chars.add(char);
            }
        }

    }

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

        if (layout.mistakes.has(letter)) {
            return;
        }

        // check to see if we have gussed incorrectly to many times or we have filled in all the blanks
        if (layout.mistakes.size >= 6 || finished(layout.chars, layout.correctGuesses)) { 
            return;
        }

        if(!layout.chars.has(letter)) {

            const mistakes = layout.mistakes.add(letter);

            setLayout({...layout, mistakes});
        }
        
        const correctGuesses = layout.correctGuesses.add(letter);
        const blanks = [...layout.blanks].map((wrd, wrdIndx) => {
            
            const chars = [...wrd.props.children].map((char, charIndx) => word[wrdIndx][charIndx] === letter ? <div className="letter" key={charIndx}>{letter}</div> : char);
            
            return <div className="word" key={wrdIndx}>{chars}</div>;

        });

        setLayout({...layout, correctGuesses, blanks});

    };

    useEffect(() => {

        window.addEventListener("keydown", guess);

        return () => {
            window.removeEventListener("keydown",guess)
        };

    },);

    // set up our state for the gameboard 
    const blanks = word.map((wrd, wrdIndx) => {

        const chars = [...wrd].map((char, charIndx) => {
            return <div className="letter" key={charIndx}></div>;
        });

        return <div className="word" key={wrdIndx}>{chars}</div>;
    });

    const chars = new Set();
    setChars(chars);
    const correctGuesses = new Set();
    const mistakes = new Set();

    // removes white spaces from set

    chars.delete(" ");

    // create our layout for the gameboard using the blanks
    const [layout, setLayout] = useState({blanks, chars, correctGuesses, mistakes});

    return (
        <div className="GameBoard">
            <Base mistakes={layout.mistakes.size}/>
            <Incorrect mistakes={layout.mistakes}/>
            <div className="Blanks">
                {layout.blanks} 
            </div>
        </div>
    );
}

export default GameBoard;