import {useState} from 'react';
import DisplayGuessedCharacters from "./displayGuessedCharacters.jsx";
import CheckGuess from "./checkGuess.jsx";
import '../App.css'

function Guess({randomCharacter, characterNamesList, characterIcons}) {
    const [guess, setGuess] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [guessedCharacters, setGuessedCharacters] = useState([]);
    console.log(JSON.stringify(characterNamesList));

    const handleGuessChange = (event) => {
        setGuess(event.target.value);
        setIsSubmitted(false);
    }

    const addToGuessedCharacters = (guess) => {
        setGuessedCharacters([...guessedCharacters, guess]);
    }

    function removeGuessCharacterFromlist(guess, characterNamesList) {
        const index = characterNamesList.indexOf(guess);
        if (index !== -1) {
            characterNamesList.splice(index, 1);
        }
    }

    const handleSubmit = () => {
        if (guess) {  // Only submit if a non-empty guess is selected
            setIsSubmitted(true);
            addToGuessedCharacters(guess);
            removeGuessCharacterFromlist(guess, characterNamesList);
            setGuess("");
        }
    }


    return (
        <>
            <div className="flex justify-center card text-yellow-400 font-['SSBMFont'] ">
                <select className="border-2 bg-black  p-2.5 my-2.5 h-11" onChange={handleGuessChange} value={guess} id="selectCharacter">
                    <option  value="">Select a character</option>
                    {characterNamesList.map((character) => (
                        <option className="block bg-black hover:bg-yellow-400 hover:text-black" key={character} value={character}>{character}</option>
                    ))}
                </select>
                <button className="hover:border-yellow-400 border-2 p-2.5 my-2.5 bg-black hover:bg-yellow-400 hover:text-black h-11" onClick={handleSubmit}>OK</button>
            </div>
            <div className="grid justify-center card text-yellow-400 font-['SSBMFont'] ">
                <DisplayGuessedCharacters guessedCharacters={guessedCharacters} randomCharacter={randomCharacter}/>
                <CheckGuess guess={guess} randomCharacter={randomCharacter} isSubmitted={isSubmitted} />
            </div>
        </>
    )
}

export default Guess;

//NEXT GOALS
// ADD ALL CHARACTERS
// ADD STYLING
// ADD SSBM CSS TO BOTTOM AND GREY OUT ALREADY GUESSED CHARACTERS