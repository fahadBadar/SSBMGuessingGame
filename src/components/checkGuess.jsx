import {useEffect, useState} from "react";
import Statistics from "./Statistics";
function CheckGuess({ guess, randomCharacter, isSubmitted, guessedCharacters, characterData}) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (guess === randomCharacter && isSubmitted) {
            setIsOpen(true);
        }
    }, [guess, randomCharacter, isSubmitted]);


    function handleClose() {
        setIsOpen(false);
    }
    if (!isSubmitted) return null;

    if (guess === randomCharacter) {
        return (
            <div>
                {isOpen &&(<div className="fixed inset-0 flex items-center justify-center  z-50">
                    <div className="bg-black p-16 rounded-lg shadow-lg text-center">
                        <h1 className="text-white text-6xl font-bold">VICTORY!</h1>
                        <div>
                            You did it in {guessedCharacters.length} tries!
                        </div>
                        <Statistics characterData={characterData} guessedCharacters={guessedCharacters} randomCharacter={randomCharacter}/>
                        <button className={"hover:border-yellow-400 border-2 mt-10 p-2.5 bg-black hover:bg-yellow-400 hover:text-black h-12"} onClick={handleClose}>Close</button>
                    </div>
                </div>)}
            </div>
        );
    }

    return <p></p>;
}

export default CheckGuess;
