import React, {useEffect, useState} from 'react';
import Guess from "./guess.jsx";

const getRandomCharacter = (characters) => {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
};

function getTodaysDate(){
    const today = new Date();
    let day  = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    let todaysDate = `${day}-${month}-${year}`;
    localStorage.setItem('today', todaysDate);
    console.log(todaysDate);
}

function RandomCharacter() {
    const [character, setCharacter] = useState(null);
    const [characterData, setCharacterData] = useState([])
    const [availableCharacters, setAvailableCharacters] = useState([]);
    useEffect(() => {
        const fetchCharacters = async () => {
            const response = await fetch('/characters.json');
            const data = await response.json();
            const charactersNames = data.characters.map(character => character.name);

            setAvailableCharacters(charactersNames);
            setCharacterData(data.characters);
            setCharacter(getRandomCharacter(charactersNames));
        };

        fetchCharacters();
        getTodaysDate();
    }, []);

    return (
        <div>
            <Guess
                randomCharacter={character}
                characterNamesList={availableCharacters}
                characterData={characterData}
            />
            {character && <p>answer: {character}</p>}
        </div>
    );
}

export default RandomCharacter;