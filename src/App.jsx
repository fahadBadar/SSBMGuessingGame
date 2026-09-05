import './App.css'
import HowToPlay from "./components/howToPlay.jsx";

function App() {
  return (
    <>
        <div className="grid grid-cols-3 justify-items-stretch border-2 border-white">
            <div className="p-4 justify-self-start content-center text-gray-200 font-['SSBMFont'] z-50">
                <HowToPlay/>
            </div>
            <h1 className="p-2 justify-self-center text-gray-200 font-['SSBMFont']">SSBMdle</h1>
            <div className=""></div>
        </div>
    </>
  )
}


export default App
