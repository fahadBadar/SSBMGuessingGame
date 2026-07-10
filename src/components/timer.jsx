import React, {useEffect} from 'react';
function Timer(){
    const [seconds, setSecond] = React.useState(0);

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
            <div>{seconds}</div>
        </>
    );
}
export default Timer;