import { IoCopyOutline } from "react-icons/io5";
import {useState} from "react";
function Statistics({characterData, guessedCharacters, randomCharacter, time}) {
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
    const [copyButtonText, setCopyButtonText] = useState("Copy Stats");
    let stats = "SSBMdle "+ getCurrentDate() +"\nTIME: "+time+"\nhttps://url.placeholder\n";

    function getCurrentDate() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        return dd + '/' + mm + '/' + yyyy;
    }



    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(stats);
            setCopyButtonText("Copied!");
            setTimeout(() => { setCopyButtonText("Copy Stats"); }, 1000);
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
            <button className={"rounded-lg hover:border-gray-200 border-2 mt-10 w-full justify-center bg-black hover:bg-gray-200 hover:text-black h-12"} onClick={handleCopy}>
                <div className="flex items-center justify-center">
                    <IoCopyOutline />
                    <div className="px-1">
                        {copyButtonText}
                    </div>
                </div>
            </button>
        </>
    )
}

export default Statistics;