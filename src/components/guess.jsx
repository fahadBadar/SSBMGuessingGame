import {useState} from 'react';
import DisplayGuessedCharacters from "./displayGuessedCharacters.jsx";
import CheckGuess from "./checkGuess.jsx";
import Dropdown from "./dropdown.jsx";
import CharacterRoster from "./characterRoster.jsx";
import '../App.css'

function Guess({randomCharacter, characterNamesList, characterData}) {
    const [guess, setGuess] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [guessedCharacters, setGuessedCharacters] = useState([]);
    console.log(JSON.stringify(characterNamesList));

    const availableCharacterData = characterData.filter(
        character => !guessedCharacters.includes(character.name)
    );

    const addToGuessedCharacters = (guess) => {
        setGuessedCharacters([...guessedCharacters, guess]);
    }

    const handleSubmit = (guess) => {
        if (guess) { 
            setIsSubmitted(true);
            addToGuessedCharacters(guess);
            setGuess(guess);
        }
    }

    return (
        <>
            <div className="flex m-1 justify-center card text-gray-200 font-['SSBMFont'] ">
                {guess !== randomCharacter && <Dropdown
                    id = "characters"
                    title = "select your character"
                    characterData = {availableCharacterData}
                    hasImage = {true}
                    onSubmit={handleSubmit} />}
            </div>
            <div className="grid justify-center card text-gray-200 font-['SSBMFont'] ">
                <DisplayGuessedCharacters guessedCharacters={guessedCharacters} randomCharacter={randomCharacter} characterData={characterData}/>
            </div>
            <div className="grid justify-center card text-gray-200 font-['SSBMFont'] ">
                <CheckGuess guess={guess} randomCharacter={randomCharacter} isSubmitted={isSubmitted} guessedCharacters={guessedCharacters} characterData={characterData}/>
                <CharacterRoster characterdata={characterData} guessedCharacters={guessedCharacters}/>
            </div>
        </>
    )
}

export default Guess;
