import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Guess from './components/guess.jsx'
import RandomCharacter from "./components/randomCharacter.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
      <RandomCharacter />
  </StrictMode>,
)
