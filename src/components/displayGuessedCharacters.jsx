function DisplayGuessedCharacters({guessedCharacters, randomCharacter, characterData}) {
    return (
        <>
            {guessedCharacters.length >= 1 && <div className={'w-full flex gap-2 text-white text-xs my-2'}>
                <span className="w-16 border-b">
                    Character
                </span>
                <span className="w-16 text-center border-b">
                    Status
                </span>
                <span className="w-16 text-center border-b">
                    Gender
                </span>
                <span className="w-16 text-center border-b">
                    Tier
                </span>
                <span className="w-16 text-center border-b">
                    Introduced
                </span>
                <span className="w-16 text-center border-b">
                    Universe
                </span>
            </div>}
            <ul className={'w-full flex flex-col gap-2'}>
                {guessedCharacters.map((character, index) => {
                    const isCorrect = character === randomCharacter;
                    const characterInfo = characterData.find(c => c.name === character);
                    const randomCharacterInfo = characterData.find(c => c.name === randomCharacter);


                    return (
                        <li className={`w-full flex gap-2`} key={index}>
                            {characterInfo && (
                                <img
                                    src={characterInfo.icon}
                                    alt={character}
                                    className="w-16 h-16 object-cover"
                                />
                            )}
                            <div
                                className={`flex items-center justify-center w-16 h-16 text-white border-2 ${isCorrect ? "bg-green-500" : "bg-red-500"} `}>
                                <div className={'text-xs text-center'}>
                                    {isCorrect ? "correct" : "incorrect"}
                                </div>
                            </div>
                            <div
                                className={`flex items-center justify-center w-16 h-16 text-white border-2 ${characterInfo.gender === randomCharacterInfo.gender ? "bg-green-500" : "bg-red-500"} `}>
                                <div className={'text-xs text-center'}>
                                    {characterInfo.gender}
                                </div>
                            </div>
                            <div
                                className={`flex items-center justify-center w-16 h-16 text-white border-2 ${characterInfo.tier === randomCharacterInfo.tier ? "bg-green-500" : "bg-red-500"} `}>
                                <div className={'text-xs text-center'}>
                                    {characterInfo.tier}
                                </div>
                            </div>
                            <div
                                className={`flex items-center justify-center w-16 h-16 text-white border-2 ${characterInfo.gameIntroduced === randomCharacterInfo.gameIntroduced ? "bg-green-500" : "bg-red-500"} `}>
                                <div className={'text-xs text-center'}>
                                    {characterInfo.gameIntroduced}
                                </div>
                            </div>
                            <div
                                className={`flex items-center justify-center w-16 h-16 text-white border-2 ${characterInfo.universe === randomCharacterInfo.universe ? "bg-green-500" : "bg-red-500"} `}>
                                <div className={'text-xs text-center'}>
                                    {characterInfo.universe}
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default DisplayGuessedCharacters;