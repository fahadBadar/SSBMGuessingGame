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
                            lorem ipsum
                        </div>
                        <button className={"m-2 rounded-lg hover:border-gray-200 border-2 mt-10 p-2.5 bg-black hover:bg-gray-200 hover:text-black h-12"} onClick={handleClose}>close</button>
                    </div>
                </div>
                <button onClick={handleOpen}><BsFillInfoCircleFill/></button>
            </>
        )
    }

    return <button onClick={handleOpen}><BsFillInfoCircleFill/></button>
}

export default HowToPlay;