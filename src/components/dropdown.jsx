import {useEffect, useRef, useState} from "react";
import {useOutsideClick} from "../hooks/useOutsideClick";

function Dropdown({
                      id,
                      title = "select your character",
                      characterData,
                      hasImage,
                      selectedCharacterName,
                      style,
                      onSubmit
                  }) {
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
    return (
        <div ref={dropdownRef} className="relative">
            <div className={'flex justify-between items-center '}>
                <button
                    id={id}
                    aria-label="Toggle dropdown"
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className={
                        'flex justify-between items-center gap-5 w-50 py-2 px-4 hover:border-yellow-400 border-2 p-2.5 bg-black hover:bg-yellow-400 hover:text-black h-12' +
                        (style ? ` ${style}` : '')
                    }
                >
                    <span>{selectedCharacter?.name || title}</span>
                </button>
                <button
                    onClick={handleSubmit}
                    className="hover:border-yellow-400 border-2 p-2.5 bg-black hover:bg-yellow-400 hover:text-black h-12"
                >
                    OK
                </button>
            </div>


            {isOpen && (
                <div aria-label="Dropdown menu"
                     className='absolute bg-black max-h-52 w-60 overflow-y-auto py-3 rounded shadow-md z-10 top-full left-0 mt-2'>
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
                                liClass += ' bg-yellow-400 text-black';
                            }

                            return (
                                <li key={item.name} onClick={() => handleCharacterSelect(item)} className={liClass}>
                                    {hasImage && (
                                        <img
                                            src={item.icon}
                                            alt="image"
                                            loading="lazy"
                                            className="w-8 h-8 object-cover me-2"
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
