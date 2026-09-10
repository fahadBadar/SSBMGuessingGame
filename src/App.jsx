import './App.css'
import RandomCharacter from "./components/randomCharacter.jsx";
import {Footer} from "./components/footer.jsx"
import {Header} from "./components/Header.jsx";
import {MetaDataHeader} from "./components/MetaDataHeader.jsx";

function App() {
  return (
    <>
        <div className="flex flex-col h-screen ">
            <div className="flex-none">
                <Header/>
            </div>
            <div className="flex-grow border-x-2 border-b-1 border-white">
                <MetaDataHeader/>
                <RandomCharacter/>
            </div>
            <div className="flex-none">
                <Footer/>
            </div>
        </div>

    </>
  )
}


export default App
