import {Component} from "react";

export class Footer extends Component {
    render() {
        return <div className="border-x-2 border-white p-2 mb-1 text-sm text-gray-400 bg-[#212121]">
            <div className="text-left text-[12px] font-bold mb-2">
                WHAT IS SSBMDLE?
            </div>
            <div className="text-left">
                SSBMdle is a free daily guessing game where you guess characters from Super Smash Bros. Melee.
                Guess a character and it will reveal their attributes giving you hints to the answer.
                The puzzle resets every day based on your time zone.
                Make sure to share your result with others. GLHF!
            </div>
            <div className="flex justify-center gap-x-2">
                <div>
                    Made by <a className="text-gray-200 hover:underline" target="_blank" href={"https://github.com/fahadBadar"}>Fahad</a>
                </div>
                <div className=" text-pink-600 hover:underline" >
                    <a target="_blank" href={"https://ko-fi.com/fahadbadar"}> Buy me a coffee!</a>
                </div>
            </div>
        </div>
    }
}