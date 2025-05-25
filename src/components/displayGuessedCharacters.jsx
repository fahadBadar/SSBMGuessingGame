function DisplayGuessedCharacters({ guessedCharacters, randomCharacter, characterData }) {
    return (
        <ul className={'w-full flex flex-col gap-2'}>
            {guessedCharacters.map((character, index) => {
                const isCorrect = character === randomCharacter;
                const characterInfo = characterData.find(c => c.name === character);
                
                return (
                    <li className={`w-full flex gap-2`} key={index}>
                        {characterInfo && (
                            <img
                                src={characterInfo.icon}
                                alt={character}
                                className="w-16 h-16 object-cover"
                            />
                        )}
                        <div className={`flex items-center justify-center w-16 h-16 text-white ${isCorrect ? "bg-green-400" : "bg-red-500"} `}>
                            <div className={'text-xs text-center'}>
                                {isCorrect ? "correct" : "incorrect"}
                            </div>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}

export default DisplayGuessedCharacters;