import React from "react";
import logo from "../assets/chef-gemini-logo.png";

function Header() {
  return (
    <header>
      <nav className="flex h-28 w-screen items-center justify-center gap-2 shadow-sm">
        <img className="w-12" src={logo} alt="Chef Gemini Logo" />
        <h1 className="text-3xl font-semibold">Chef Gemini</h1>
      </nav>
    </header>
  );
}

export default Header;
