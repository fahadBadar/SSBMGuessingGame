function CharacterRoster({ characterdata }) {
    return (
        <div className="w-160 p-4">
            <div className="flex flex-wrap justify-center">
                {characterdata.map((character) => (
                    <div key={character.name}>
                        <img 
                            src={character.icon} 
                            alt={character.name}
                            className="w-16 h-16 object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CharacterRoster;