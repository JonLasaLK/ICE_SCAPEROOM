import {BrowserRouter, Routes, Route} from "react-router";
import React from "react";
import './App.css'
import { LandingPage } from './LandingPage'
import { GameModeSelectorPage } from "./GameModeSelectorPage";
import { InstructionsPage } from "./InstructionsPage";
import { GamePage, type PlayerState } from "./GamePage";
import { WinPage } from "./WinPage";
import { LosePage } from "./LosePage";



function App() {
  const [playerState, setPlayerState] = React.useState<PlayerState>('Playing')
  const [playerAmount, setPlayerAmount] = React.useState<number>(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/GameModeSelectorPage" element={<GameModeSelectorPage playerAmount={playerAmount} onPlayerAmountChange={setPlayerAmount}/>} />
      <Route path="/InstructionsPage" element={<InstructionsPage/>} />
      <Route path="/GamePage" element={<GamePage playerAmount={playerAmount} playerState={playerState} onPlayerStateChange={setPlayerState}/>} />
      <Route path="/WinPage" element={<WinPage/>}  />
      <Route path="/LosePage" element={<LosePage/>}  />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App
