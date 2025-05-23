import {useEffect, useRef, useState} from "react";
import {useOutsideClick} from "../hooks/useOutsideClick";

function Dropdown({
                      id,
                      title = "select your character",
                      characterData,
                      position = "bottom-left",
                      hasImage,
                      selectedCharacterName,
                      style,
                      onSubmit})
{
    const [isOpen, setIsOpen] = useState(false);

    const [selectedCharacter, setSelectedCharacter] = useState(
        selectedCharacterName ? characterData?.find((character) => character.name === selectedCharacterName) : undefined
    );

    const handleCharacterSelect = (character) => {
        setSelectedCharacter(character);
        setIsOpen(false);
    }

    const handleSubmit = () => {
        if (selectedCharacter) {
            onSubmit(selectedCharacter.name);
            setSelectedCharacter(undefined);
        }
    }


    useEffect(() => {
     const newSelectedCharacter = characterData?.find((character) => character.name === selectedCharacterName);
     setSelectedCharacter(newSelectedCharacter || undefined);
    }, [selectedCharacterName, characterData]);

    const dropdownRef = useRef();
    useOutsideClick({
        ref: dropdownRef,
        handler: () => setIsOpen(false),
        isOpen,
    })

    const positionClasses = {
        'bottom-right': 'top-full right-0 mt-2',
        'bottom-left': 'top-full left-0 mt-2',
        'top-right': 'bottom-full right-0 mb-2',
        'top-left': 'bottom-full left-0 mb-2',
    };

    const dropdownClass =
        'absolute bg-gray-100 w-max max-h-52 overflow-y-auto py-3 rounded shadow-md z-10 ' +
        (positionClasses[position] || '');

    return (
        <div ref={dropdownRef} className="relative">
            <div className={ 'flex justify-between items-center '}>
                <button
                    id={id}
                    aria-label="Toggle dropdown"
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className={
                        'flex justify-between items-center gap-5 w-full py-2 px-4 hover:border-yellow-400 border-2 p-2.5 bg-black hover:bg-yellow-400 hover:text-black h-12' +
                        (style ? ` ${style}` : '')
                    }
                >
                    <span>{selectedCharacter?.name || title}</span>
                </button>
                <button
                    onClick={handleSubmit}
                    disabled={!selectedCharacter}
                    className="hover:border-yellow-400 border-2 p-2.5 bg-black hover:bg-yellow-400 hover:text-black h-12"
                >
                    OK
                </button>
            </div>


            {isOpen && (
                <div aria-label="Dropdown menu" className={dropdownClass}>
                    <ul
                        role="menu"
                        aria-labelledby={id}
                        aria-orientation="vertical"
                        className="leading-10"
                    >
                        {characterData?.map((item) => {
                            let liClass =
                                'flex items-center cursor-pointer hover:bg-gray-200 px-3';

                            if (selectedCharacter?.name === item.name) {
                                liClass += ' bg-gray-300';
                            }

                            return (
                                <li key={item.name} onClick={() => handleCharacterSelect(item)} className={liClass}>
                                    {hasImage && (
                                        <img
                                            src={item.icon}
                                            alt="image"
                                            loading="lazy"
                                            className="w-8 h-8 rounded-full bg-gray-400 object-cover me-2"
                                        />
                                    )}
                                    <span>{item.name}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}

        </div>
    )

}
export default Dropdown;
