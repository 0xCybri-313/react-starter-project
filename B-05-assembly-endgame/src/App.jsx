import { languages } from "./database/languages";
import { useState } from "react";

function App() {
  const [currentWord, setCurrentWord] = useState("react");

  const wordChar = currentWord.split("");

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  return (
    <>
      <main className="flex h-screen w-screen flex-col items-center justify-center gap-8 bg-[#282726]">
        {/* header */}

        <header className="flex h-36 w-sm flex-col items-center">
          <h1 className="text-xl font-medium text-[#F9F4DA]">
            Assembly: Endgame
          </h1>
          <p className="text-center text-sm font-medium text-[#8E8E8E]">
            Guess the word within 8 attempts to keep the programming world safe
            from Assembly!
          </p>

          {/* message section */}

          <section className="mt-4 flex h-full w-full flex-col items-center justify-center rounded bg-[#10A95B] text-[#F9F4DA]">
            <h2 className="text-xl font-medium">You win!</h2>
            <p className="text-sm font-medium">Well done! 🎉</p>
          </section>
        </header>

        {/* languages section */}

        <section className="flex w-xs flex-wrap items-center justify-center gap-1">
          {languages.map((lang) => (
            <div
              className="flex h-6 items-center justify-center rounded px-2 text-xs font-bold"
              style={{ background: lang.backgroundColor, color: lang.color }}
              key={lang.name}
            >
              {lang.name}
            </div>
          ))}
        </section>

        {/* guessed word */}

        <div className="flex w-xs flex-wrap items-center justify-center gap-1">
          {wordChar.map((char, index) => (
            <span
              key={index}
              className="flex size-10 items-center justify-center border-b-2 border-b-[#F9F4DA] bg-[#323232] text-xl font-bold text-[#F9F4DA]"
            >
              {char.toUpperCase()}
            </span>
          ))}
        </div>

        {/* keyboard section */}

        <section className="flex w-md flex-wrap items-center justify-center gap-1">
          {alphabet.split("").map((char) => (
            <button
              key={char}
              className="size-10 rounded border border-[#D7D7D7] bg-[#FCBA29] text-base font-semibold"
            >
              {char.toUpperCase()}
            </button>
          ))}
        </section>

        {/* new game button */}

        <button className="flex h-10 w-72 items-center justify-center rounded border border-[#D7D7D7] bg-[#11B5E5] text-base font-semibold">
          New Game
        </button>
      </main>
    </>
  );
}

export default App;
