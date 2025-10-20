import React, {useState} from 'react';
import { BsFillInfoCircleFill } from "react-icons/bs";

const HowToPlay = () => {
    const [isOpen, setIsOpen] = useState(false);

    function handleOpen(){
        setIsOpen(true);
    }

    function handleClose(){
        setIsOpen(false);
    }

    if (isOpen) {
        return (
            <>
                <div className="fixed inset-0 flex items-center justify-center">
                    <div className={"bg-black p-32 rounded-lg shadow-lg text-center"}>
                        <div>
                            A character from the roster below will be randomly selected.
                            <br/>
                            If you guess correctly, you win!!
                            <br/>
                            If not your guess will be shown alongside four different categories: Gender, Tier, Game Introduced and Universe
                            <br/>
                            The tiers will be in accordance to the below tier list.
                            <br/>
                            <br/>
                                <img src="https://static.invenglobal.com/upload/image/2021/04/06/i1617741337430068.jpeg" alt="tier list" className="justify-center mx-auto w-1/2"/>
                            <br/>
                            be sure to share your results with others once you finish GLHF :)
                            <br/>
                            This project was inspired by <a href = "https://meleedle.netlify.app">Meleedle</a> and  <a href = "https://smashdle.com/">Smashdle</a>
                            <br/>
                        </div>
                        <button className={"m-2 rounded-lg hover:border-gray-200 border-2 mt-10 p-2.5 bg-black hover:bg-gray-200 hover:text-black h-12"} onClick={handleClose}>close</button>
                    </div>
                </div>
                <button className={"cursor-pointer"} onClick={handleOpen}><BsFillInfoCircleFill/></button>
            </>
        )
    }

    return <button className={"cursor-pointer"} onClick={handleOpen}><BsFillInfoCircleFill/></button>
}

export default HowToPlay;