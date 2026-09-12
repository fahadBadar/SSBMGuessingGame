import {Component} from "react";
const today = new Date();
const dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const startDate = new Date("2026-09-05")
const dateDifference = Math.abs(today - startDate)
const dayDifference = Math.floor(dateDifference / (1000 * 60 * 60 * 24))

export class MetaDataHeader extends Component {
    render() {
        return <div className="flex justify-between p-2">
            <div>
                <div className="text-xl text-start font-bold">
                    SSBMdle #{dayDifference}
                </div>
                <div className="text-sm text-gray-400">
                    {dayNames[today.getDay()]}, {monthNames[today.getMonth()] } { today.getDate()}
                </div>
            </div>
            <div className="bg-white text-black content-center rounded-full px-3 py-1 font-bold">
                Guess the Character
            </div>
        </div>;
    }
}