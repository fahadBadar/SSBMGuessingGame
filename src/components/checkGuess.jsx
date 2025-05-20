function CheckGuess({ guess, randomCharacter, isSubmitted}) {
    if (!isSubmitted) return null;

    if (guess === randomCharacter) {
        return <p>correct</p>;
    }
    return <p></p>;
}

export default CheckGuess;
