"use client";

import { useState } from "react";
import { LoginScreen } from "./components/LoginScreen";
import Desktop from "./components/Desktop";
import UpdatePopup from "./components/UpdatePopup";
import BlueScreen from "./components/BlueScreen";
import { Alert, TitleBar } from "@react95/core";
export default function Home() {
  const [gameState, setGameState] = useState("login");
  const [level, setLevel] = useState(1);
  const [openAlert, setOpenAlert] = useState(false);

  const handleLogin = () => {
    setGameState("desktop");
  };

  const handleSkipUpdate = () => {
    if (level < 4) {
      setLevel(level + 1);
    } else {
      setGameState("bluescreen");
    }
  };

  const handleAcceptUpdate = () => {
    setGameState("bluescreen");
  };
  const closeAlert = () => setOpenAlert(false);

  return (
    <main className="h-screen w-screen bg-[#008080] overflow-hidden">
      {/* <ThemeProvider> */}
      {/* <Alert
        title="Windows Networking"
        type="error"
        dragOptions={{
          defaultPosition: {
            x: 130,
            y: 130,
          },
        }}
        titleBarOptions={<TitleBar.Close key="close" onClick={closeAlert} />}
        message="The Windows password you typed is incorrect."
        buttons={[
          {
            value: "OK",
            onClick: closeAlert,
          },
        ]}
      /> */}
      {gameState === "login" && <LoginScreen onLogin={handleLogin} />}
      {gameState === "desktop" && (
        <Desktop>
          <UpdatePopup
            level={level}
            onSkip={handleSkipUpdate}
            onAccept={handleAcceptUpdate}
          />
        </Desktop>
      )}
      {gameState === "bluescreen" && <BlueScreen />}
      {/* </ThemeProvider> */}
    </main>
  );
}
