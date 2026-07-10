function Statistics({characterData, guessedCharacters, randomCharacter}) {
    const getComparison = (characterInfo, randomCharacterInfo) => [
        { value: characterInfo.gender,
            isMatch: characterInfo.gender === randomCharacterInfo.gender },
        { value: characterInfo.tier,
            isMatch: characterInfo.tier === randomCharacterInfo.tier },
        { value: characterInfo.gameIntroduced,
            isMatch: characterInfo.gameIntroduced === randomCharacterInfo.gameIntroduced },
        { value: characterInfo.universe,
            isMatch: characterInfo.universe === randomCharacterInfo.universe }
    ];

    function getCurrentDate() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        return dd + '/' + mm + '/' + yyyy;
    }


    let stats = "SSBMdle "+ getCurrentDate() +"\nTIME XX:XX\nhttps://url.placeholder\n";


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

            <button className={"m-2 rounded-lg hover:border-gray-200 border-2 mt-10 p-2.5 bg-black hover:bg-gray-200 hover:text-black h-12"} onClick={handleCopy}>Copy</button>
        </>
    )
}

export default Statistics;