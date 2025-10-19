import './App.css'
import HowToPlay from "./components/howToPlay.jsx";

function App() {
  return (
    <>
        <div className="fixed top-4 left-4 card text-gray-200 font-['SSBMFont'] z-50">
            <HowToPlay/>
        </div>
        <h1 className="text-gray-200 font-['SSBMFont']">Guess the SSBM character</h1>
    </>
  )
}


export default App
