import './App.css'
import HowToPlay from "./components/howToPlay.jsx";

function App() {
  return (
    <>
        <div className="flex justify-between flex-row">
            <div className="text-gray-200 font-['SSBMFont'] z-50">
                <HowToPlay/>
            </div>
            <h1 className="text-gray-200 top-0 font-['SSBMFont']">Guess the SSBM character</h1>
        </div>

    </>
  )
}


export default App
