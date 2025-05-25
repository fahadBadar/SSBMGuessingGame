import {useState} from 'react';
import DisplayGuessedCharacters from "./displayGuessedCharacters.jsx";
import CheckGuess from "./checkGuess.jsx";
import Dropdown from "./dropdown.jsx";
import '../App.css'

function Guess({randomCharacter, characterNamesList, characterData}) {
    const [guess, setGuess] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [guessedCharacters, setGuessedCharacters] = useState([]);
    console.log(JSON.stringify(characterNamesList));

    const addToGuessedCharacters = (guess) => {
        setGuessedCharacters([...guessedCharacters, guess]);
    }

    function removeGuessCharacterFromlist(guess, characterNamesList) {
        const index = characterNamesList.indexOf(guess);
        if (index !== -1) {
            characterNamesList.splice(index, 1);
        }
    }

    const handleSubmit = (guess) => {
        if (guess) { 
            setIsSubmitted(true);
            addToGuessedCharacters(guess);
            removeGuessCharacterFromlist(guess, characterNamesList);
            setGuess("");
        }
    }


    return (
        <>
            <div className="flex justify-center card text-yellow-400 font-['SSBMFont'] ">
                <Dropdown
                    id = "characters"
                    title = "select your character"
                    characterData = {characterData}
                    hasImage = {true}
                    onSubmit={handleSubmit} />
            </div>
            <div className="grid justify-center card text-yellow-400 font-['SSBMFont'] ">
                <DisplayGuessedCharacters guessedCharacters={guessedCharacters} randomCharacter={randomCharacter}/>
                <CheckGuess guess={guess} randomCharacter={randomCharacter} isSubmitted={isSubmitted} />
            </div>
        </>
    )
}

export default Guess;
