import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [color, setColor] = useState("olive");

  const colors = [
    "Red",
    "Green",
    "Blue",
    "Olive",
    "Gray",
    "Yellow",
    "Pink",
    "Purple",
    "Lavender",
    "White",
    "Black",
  ];
  return (
    <>
      <div
        className="flex h-screen w-screen items-center justify-center duration-500"
        style={{ backgroundColor: color }}
      >
        <h1 className="flex h-96 items-center justify-center bg-linear-to-r from-yellow-300 to-pink-500 bg-clip-text text-5xl font-extrabold text-transparent drop-shadow-lg md:text-7xl">
          Click carefully. It's magic.
        </h1>
        <div className="fixed inset-x-0 bottom-16 flex items-center justify-center">
          <div className="flex h-16 items-center justify-center gap-2 rounded-4xl bg-white px-4 shadow-lg">
            {colors.map((col) => (
              <Button key={col} color={col} onColorChange={setColor} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
