import React, {useEffect} from 'react';
function Timer(){
    const [seconds, setSecond] = React.useState(0);

    function formatSeconds(seconds){
        var minutes = Math.floor(seconds / 60);
        var leftoverSeconds = seconds % 60;
        return `${minutes}:${leftoverSeconds.toString().padStart(2, '0')}`;
    }

    function addSecond() {
        setSecond(prevSeconds => prevSeconds + 1);
    }

    useEffect(() => {
        const timer = window.setInterval(addSecond,1000)
        return () => {
            window.clearInterval(timer);
        }
    }, []);

    return (
        <>
            <div>{formatSeconds(seconds)}</div>
        </>
    );
}
export default Timer;