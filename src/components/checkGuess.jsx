import {useEffect, useState} from "react";
import Statistics from "./Statistics";
function CheckGuess({ guess, randomCharacter, isSubmitted, guessedCharacters, characterData, time, handleGuess}) {
    const [isOpen, setIsOpen] = useState(false);

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
                    <div className="bg-black  p-2 rounded-lg ring ring-white shadow-lg m-2 mt-4 text-center w-full">
                        <h1 className="text-white text-6xl font-bold">VICTORY</h1>
                        <div>
                            <img
                                src={randomCharacter.icon}
                                alt={randomCharacter}
                            />
                            <div>
                                You did it in {formatSeconds(time)} and {guessedCharacters.length} tries!
                            </div>
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
