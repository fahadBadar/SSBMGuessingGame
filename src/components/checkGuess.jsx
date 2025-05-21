function CheckGuess({ guess, randomCharacter, isSubmitted}) {
    if (!isSubmitted) return null;

    if (guess === randomCharacter) {
        return <p>VICTORY</p>;
    }
    return <p></p>;
}

export default CheckGuess;
