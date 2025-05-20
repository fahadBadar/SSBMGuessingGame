import {useState} from 'react';
import DisplayGuessedCharacters from "./displayGuessedCharacters.jsx";
import CheckGuess from "./checkGuess.jsx";
import '../App.css'

function Guess({randomCharacter, characterList}) {
    const [guess, setGuess] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [guessedCharacters, setGuessedCharacters] = useState([]);
    console.log(JSON.stringify(characterList));

    const handleGuessChange = (event) => {
        setGuess(event.target.value);
        setIsSubmitted(false);
    }

    const addToGuessedCharacters = (guess) => {
        setGuessedCharacters([...guessedCharacters, guess]);
    }

    const handleSubmit = () => {
        if (guess) {  // Only submit if a non-empty guess is selected
            setIsSubmitted(true);
            addToGuessedCharacters(guess);
        }
    }


    return (
        <>
            <div className="card">
                <select onChange={handleGuessChange} value={guess} id="selectCharacter">
                    <option value="">Select a character</option>
                    {characterList.map((character) => (
                        <option key={character} value={character}>{character}</option>
                    ))}
                </select>
                <button onClick={handleSubmit}>Submit Guess</button>
                <p>you guessed</p>
                <DisplayGuessedCharacters guessedCharacters={guessedCharacters}/>
                <CheckGuess guess={guess} randomCharacter={randomCharacter} isSubmitted={isSubmitted}/>
            </div>
        </>
    )
}

export default Guess;

//NEXT GOALS
// ADD ALL CHARACTERS
// ADD STYLING
// ADD SSBM CSS TO BOTTOM AND GREY OUT ALREADY GUESSED CHARACTERS