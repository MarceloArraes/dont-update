"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function UpdatePopup({
  level,
  onSkip,
  onAccept,
}: {
  level: number;
  onSkip: () => void;
  onAccept: () => void;
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const newX = Math.random() * (window.innerWidth - 300);
    const newY = Math.random() * (window.innerHeight - 200);
    setPosition({ x: newX, y: newY });
  }, []);

  const getSkipButtonStyle = () => {
    switch (level) {
      case 1:
        return "visible";
      case 2:
        return "opacity-50 hover:opacity-100";
      case 3:
        return "opacity-25 hover:opacity-100";
      case 4:
        return "opacity-10 hover:opacity-100";
      default:
        return "visible";
    }
  };

  return (
    <div
      className="flex flex-1 flex-col w-1/2 justify-center items-center self-center bg-[#c0c0c0] p-4 shadow-md"
      // style={{ left: position.x, top: position.y, width: "90%", height: "90%" }}
    >
      <div className="bg-[#000080] w-full px-2 py-1 text-white">
        Windows Update
      </div>
      <div className="mt-4 text-center">
        <p className="text-xl font-bold">Update to Windows 11</p>
        <p className="mt-2">
          Your system is ready for a free upgrade to Windows 11.
        </p>
        <p className="mt-2">Do you want to install now?</p>
      </div>
      <div className="mt-4 flex justify-center space-x-4">
        <Button onClick={onAccept}>Accept Update</Button>
        <Button
          onClick={onSkip}
          className={`${getSkipButtonStyle()} transition-opacity duration-300`}
        >
          Skip Update
        </Button>
      </div>
    </div>
  );
}
