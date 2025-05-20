function DisplayGuessedCharacters({ guessedCharacters, randomCharacter }) {
    return (
        <ul>
            {guessedCharacters.map((character, index) => {
                const isCorrect = character === randomCharacter;
                return (
                    <li key={index}>
                        {character} - {isCorrect ? "correct" : "incorrect"}
                    </li>
                );
            })}
        </ul>
    );
}

export default DisplayGuessedCharacters;
