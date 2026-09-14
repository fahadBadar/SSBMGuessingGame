import {useEffect, useState} from "react";
import Statistics from "./Statistics";
function CheckGuess({ guess, randomCharacter, isSubmitted, guessedCharacters, characterData, time, handleGuess}) {
    const [isOpen, setIsOpen] = useState(false);
    const randomCharacterData = characterData.find(c => c.name === randomCharacter);

    useEffect(() => {
        if (guess === randomCharacter && isSubmitted) {
            setIsOpen(true);
        }
    }, [guess, randomCharacter, isSubmitted]);

    function formatSeconds(seconds){
        var minutes = Math.floor(seconds / 60);
        var leftoverSeconds = seconds % 60;
        return `${minutes}:${leftoverSeconds.toString().padStart(2, '0')}`;
    }

    if (!isSubmitted) return null;
    if (guess === randomCharacter) {
            handleGuess();
        return (
            <>
                {isOpen &&(<div className="flex items-center w-full">
                    <div className="p-2 m-2 mt-4 text-center w-full h-full">
                        <h1 className="text-white text-6xl font-bold">VICTORY</h1>
                        <div className="flex justify-center p-2">
                            <img
                                src={randomCharacterData.icon}
                                alt={randomCharacter}
                            />
                            <div className="p-2 content-center">
                                <div>
                                    You guessed
                                </div>
                                <div className="text-xl font-bold">
                                    {randomCharacterData.name}
                                </div>
                            </div>
                        </div>
                        <div>
                            You did it in {formatSeconds(time)} and {guessedCharacters.length} tries!
                        </div>
                        <Statistics characterData={characterData} guessedCharacters={guessedCharacters} randomCharacter={randomCharacter} time={formatSeconds(time)} />
                    </div>
                </div>)}
            </>
        );
    }

    return <p></p>;
}

export default CheckGuess;
