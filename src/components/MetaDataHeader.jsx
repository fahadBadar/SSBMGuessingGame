import {Component} from "react";
const date = new Date();
const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

export class MetaDataHeader extends Component {
    render() {
        return <div className="flex justify-between p-2">
            <div>
                <div className="text-xl text-start font-bold">
                    SSBMdle #X
                </div>
                <div className="text-sm text-gray-400">
                    {dayNames[date.getDay()]}, {monthNames[date.getMonth()] } { date.getDate()}
                </div>
            </div>
            <div className="bg-white text-black content-center rounded-full px-3 py-1 font-bold">
                Guess the Character
            </div>
        </div>;
    }
}