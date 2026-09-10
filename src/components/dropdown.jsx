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
    }, [selectedCharacterName]);

    const dropdownRef = useRef();
    useOutsideClick({
        ref: dropdownRef,
        handler: () => setIsOpen(false),
        isOpen,
    })
    return (
        <div ref={dropdownRef} className="relative w-full">
            <div className={'flex'}>

                <div className={'flex-grow py-2 pl-2 pr-1'}>
                    <button
                        id={id}
                        aria-label="Toggle dropdown"
                        aria-haspopup="true"
                        aria-expanded={isOpen}
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className={
                            'flex rounded-lg py-2 w-full px-4 hover:border-gray-200 border-2 p-2.5 bg-black hover:bg-gray-200 hover:text-black h-12' +
                            (style ? ` ${style}` : '')
                        }
                    >
                        <div className={'flex items-center justify-center'}>
                            <span>{selectedCharacter?.name || title}</span>
                        </div>

                    </button>
                </div>

                <div className={'py-2 pl-1 pr-2'}>
                    <button
                        onClick={handleSubmit}
                        className="rounded-lg hover:border-gray-200 border-2 p-2.5 bg-black hover:bg-gray-200 hover:text-black h-12">
                        OK
                    </button>
                </div>

            </div>


            {isOpen && (
                <div aria-label="Dropdown menu"
                     className='absolute bg-black max-h-52 w-full overflow-y-auto py-3 rounded shadow-md z-10 top-full left-0 mt-2'>
                    <ul
                        role="menu"
                        aria-labelledby={id}
                        aria-orientation="vertical"
                        className="leading-10"
                    >
                        {characterData?.map((item) => {
                            let liClass =
                                'flex items-center cursor-pointer hover:bg-gray-600 px-3';

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
