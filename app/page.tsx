"use client"

import { useState } from "react"
import LoginScreen from "./components/LoginScreen"
import Desktop from "./components/Desktop"
import UpdatePopup from "./components/UpdatePopup"
import BlueScreen from "./components/BlueScreen"

export default function Home() {
  const [gameState, setGameState] = useState("login")
  const [level, setLevel] = useState(1)

  const handleLogin = () => {
    setGameState("desktop")
  }

  const handleSkipUpdate = () => {
    if (level < 4) {
      setLevel(level + 1)
    } else {
      setGameState("bluescreen")
    }
  }

  const handleAcceptUpdate = () => {
    setGameState("bluescreen")
  }

  return (
    <main className="h-screen w-screen bg-[#008080] overflow-hidden">
      {gameState === "login" && <LoginScreen onLogin={handleLogin} />}
      {gameState === "desktop" && (
        <Desktop>
          <UpdatePopup level={level} onSkip={handleSkipUpdate} onAccept={handleAcceptUpdate} />
        </Desktop>
      )}
      {gameState === "bluescreen" && <BlueScreen />}
    </main>
  )
}

