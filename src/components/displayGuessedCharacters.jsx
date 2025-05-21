function DisplayGuessedCharacters({ guessedCharacters, randomCharacter}) {
    return (
        <ul>
            {guessedCharacters.map((character, index) => {
                const isCorrect = character === randomCharacter;
                if (isCorrect) {
                    return (
                        <li className="text-green-400" key={index}>
                            {character} - {"correct"}
                        </li>
                    );
                }
                return (
                    <li className="text-red-500" key={index}>
                        {character} - {"incorrect"}
                    </li>
                );
            })}
        </ul>
    );
}

export default DisplayGuessedCharacters;
