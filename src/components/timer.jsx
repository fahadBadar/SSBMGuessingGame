import React, {useEffect} from 'react';
function Timer({seconds, setSecond, isCorrect}) {

    function formatSeconds(seconds){
        var minutes = Math.floor(seconds / 60);
        var leftoverSeconds = seconds % 60;
        return `${minutes}:${leftoverSeconds.toString().padStart(2, '0')}`;
    }

    function addSecond() {
        setSecond(prevSeconds => prevSeconds + 1);
    }

    useEffect(() => {
        if (!isCorrect) {
            const timer = window.setInterval(addSecond,1000)
            return () => {
                window.clearInterval(timer);
            }
        }
    }, [isCorrect]);

    return (
        <>
            <div>{formatSeconds(seconds)}</div>
        </>
    );
}
export default Timer;