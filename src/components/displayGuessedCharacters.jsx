function DisplayGuessedCharacters({ guessedCharacters}) {
    return (
        <ul>
            {guessedCharacters.map((character, index) => (
                <li key={index}>{character}</li>
            ))}
        </ul>
    )
}

export default DisplayGuessedCharacters;