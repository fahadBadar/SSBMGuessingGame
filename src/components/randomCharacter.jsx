import React, {useEffect, useState} from 'react';
import Guess from "./guess.jsx";

const getRandomCharacter = (characters) => {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
};

function RandomCharacter() {
    const [character, setCharacter] = useState(null);
    const [availableCharacters, setAvailableCharacters] = useState([]);
    const [characterIcons, setCharacterIcons] = useState([])

    useEffect(() => {
        const fetchCharacters = async () => {
            const response = await fetch('/characters.json');
            const data = await response.json();
            const charactersNames = data.characters.map(character => character.name);

            setAvailableCharacters(charactersNames);
            setCharacterIcons(data.characters.map(character => character.icon));
            setCharacter(getRandomCharacter(charactersNames));
        };

        fetchCharacters();
    }, []);

    return (
        <div>
            <Guess
                randomCharacter={character}
                characterNamesList={availableCharacters}
                characterIcons={characterIcons}
            />
            {character && <p>answer: {character}</p>}
        </div>
    );
}

export default RandomCharacter;