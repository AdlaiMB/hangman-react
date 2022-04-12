import './Incorrect.css';

function Incorrect({mistakes}) {

    const incorrectGuesses = [];

    for (let char of mistakes) {
        incorrectGuesses.push(char);
    }

    return (
        <div className="Incorrect">
            <h2>Mistakes</h2> 
            <div className="incorrectGuesses">
                {incorrectGuesses.map((char, indx) => <div className="char" key={indx}>{char}</div>)}    
            </div>
        </div>
    )
}

export default Incorrect;