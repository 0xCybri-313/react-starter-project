import React from "react";
import globe from "../assets/globe.png";

function Header() {
  return (
    <header>
      <nav className="flex h-16 w-screen items-center justify-center gap-2 bg-[#F55A5A]">
        <img className="size-8" src={globe} alt="globe-icon" />
        <span className="font-[inter] text-xl font-bold text-white">
          My Travel Journal
        </span>
      </nav>
    </header>
  );
}

export default Header;
