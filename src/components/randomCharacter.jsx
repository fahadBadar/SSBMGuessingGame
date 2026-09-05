import React, {useEffect, useState} from 'react';
import Guess from "./guess.jsx";

function getTodaysDate(){
    const today = new Date();
    let day  = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    return `${day}-${month}-${year}`;
}

function generateRandomCharacterIndex(today, characters){
    let dateSeed = 0;
    for (let i = 0; i <= today.length - 1; i++) {
        dateSeed += today.charCodeAt(i);
    }
    console.log(dateSeed % characters.length);
    return dateSeed % characters.length;
}

function setRandomCharacter(charactersNames, setCharacter) {
    const today = getTodaysDate();
    if (today !== localStorage.getItem('today')) {
        localStorage.setItem('today', today);
        let characterIndex = generateRandomCharacterIndex(today, charactersNames);
        localStorage.setItem('character', charactersNames[characterIndex]);
        setCharacter(charactersNames[characterIndex]);
    }else{
        setCharacter(localStorage.getItem('character'));
    }
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
            setRandomCharacter(charactersNames, setCharacter);
        };

        fetchCharacters();

    }, []);

    return (
        <div className="border-x-2 border-b-2 border-white">
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