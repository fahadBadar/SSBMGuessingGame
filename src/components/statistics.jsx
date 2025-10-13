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


    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(stats);
            console.log('Stats copied to clipboard');
        } catch (err) {
            console.error('Failed to copy stats:', err);
        }
    };


    return(
        <>
        {
            guessedCharacters.map((character) => {
                const characterInfo = characterData.find(c => c.name === character);
                const randomCharacterInfo = characterData.find(c => c.name === randomCharacter);
                const comparisons = getComparison(characterInfo, randomCharacterInfo);

                comparisons.forEach((comparison) => {
                    stats += comparison.isMatch ? "🟩" : "🟥";
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

            <button className={"hover:border-yellow-400 border-2 mt-10 p-2.5 bg-black hover:bg-yellow-400 hover:text-black h-12"} onClick={handleCopy}>Copy</button>
        </>
    )
}

export default Statistics;