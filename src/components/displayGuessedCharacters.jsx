import ComparisonCell from "./comparisonCell.jsx";

function DisplayGuessedCharacters({guessedCharacters, randomCharacter, characterData}) {
    const getComparison = (characterInfo, randomCharacterInfo) => [
        { value: characterInfo === randomCharacter ? "correct" : "incorrect",
            isMatch: characterInfo === randomCharacter },
        { value: characterInfo.gender,
            isMatch: characterInfo.gender === randomCharacterInfo.gender },
        { value: characterInfo.tier,
            isMatch: characterInfo.tier === randomCharacterInfo.tier },
        { value: characterInfo.gameIntroduced,
            isMatch: characterInfo.gameIntroduced === randomCharacterInfo.gameIntroduced },
        { value: characterInfo.universe,
            isMatch: characterInfo.universe === randomCharacterInfo.universe }
    ];

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
                    const characterInfo = characterData.find(c => c.name === character);
                    const randomCharacterInfo = characterData.find(c => c.name === randomCharacter);
                    const comparisons = getComparison(characterInfo, randomCharacterInfo);

                    return (
                        <li className={`w-full flex gap-2`} key={index}>
                            {characterInfo && (
                                <img
                                    src={characterInfo.icon}
                                    alt={character}
                                    className="w-16 h-16 object-cover"
                                />
                            )}
                            {comparisons.map((comparison) => (
                                <ComparisonCell value={comparison.value} isCorrect={comparison.isMatch}/>
                            ))}
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default DisplayGuessedCharacters;