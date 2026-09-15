import {Component} from "react";

export class Header extends Component {
    render() {
        return <div className="grid justify-items-center border-x-2 border-b-2 border-white">
            <div className="p-2 flex text-red-700 font-['SSBMFont'] text-5xl">
                <span>SSBM</span>
                <span className="text-white">dle</span>
            </div>
        </div>
    }
}