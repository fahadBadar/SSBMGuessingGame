function Statistics({characterData, guessedCharacters, randomCharacter}) {
    const getComparison = (characterInfo, randomCharacterInfo) => [
        { value: characterInfo.name === randomCharacter ? 'correct' : 'incorrect',
            isMatch: characterInfo.name === randomCharacter },
        { value: characterInfo.gender,
            isMatch: characterInfo.gender === randomCharacterInfo.gender },
        { value: characterInfo.tier,
            isMatch: characterInfo.tier === randomCharacterInfo.tier },
        { value: characterInfo.gameIntroduced,
            isMatch: characterInfo.gameIntroduced === randomCharacterInfo.gameIntroduced },
        { value: characterInfo.universe,
            isMatch: characterInfo.universe === randomCharacterInfo.universe }
    ];

    let stats = "Smashdle xx/xx/xx\nTIME XX:XX\nhttps://url.placeholder\n";

    return(
        <>
        {
            guessedCharacters.map((character) => {
                const characterInfo = characterData.find(c => c.name === character);
                const randomCharacterInfo = characterData.find(c => c.name === randomCharacter);
                const comparisons = getComparison(characterInfo, randomCharacterInfo);

                comparisons.forEach((comparison) => {
                    stats += comparison.isMatch ? "✅" : "🟥";
                });
                stats += "\n";
                console.log(stats);
            })
        }
            <div>
                <textarea 
                    className="bg-[#242424] text-white" 
                    value={stats} 
                    readOnly={true}
                    style={{ whiteSpace: 'pre-line' }}
                />
            </div>
        </>
    )
}

export default Statistics;