import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/core";
import { Particles } from "./components/ui/particles.tsx"
function App() {
  const [color, setColor] = useState("#000000")
  return (
    <div className="bg-background relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border">
        <span className="pointer-events-none z-10 text-center text-5xl leading-none font-semibold whitespace-pre-wrap">
          AgentCells under construction
        </span>
        <Particles
          className="absolute inset-0 z-0"
          quantity={100}
          ease={80}
          color={color}
          refresh
        />
      </div>
  );
}

export default App;