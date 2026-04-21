import React from "react";
import trollFace from "../assets/troll-face.png";

function Header() {
  return (
    <header className="flex h-16 w-xl items-center gap-2 bg-linear-to-r from-[#672280] to-[#A626D3] px-4">
      <img className="h-8" src={trollFace} />
      <h1 className="text-xl font-bold text-white">Meme Generator</h1>
    </header>
  );
}

export default Header;
