import { languages } from "./database/languages";
import { useState } from "react";
import { clsx } from "clsx";

function App() {
  // State values

  const [currentWord, setCurrentWord] = useState("react");

  const [userGuess, setUserGuess] = useState([]);

  // Derived values

  const wrongGuessCount = userGuess.filter(
    (char) => !currentWord.includes(char),
  ).length;

  const isGameWon = currentWord
    .split("")
    .every((char) => userGuess.includes(char));
  const isGameLost = wrongGuessCount >= languages.length - 1;
  const isGameOver = isGameWon || isGameLost;

  // Static values

  const wordChar = currentWord.split("");

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function addUserGuess(userChar) {
    setUserGuess((prev) =>
      prev.includes(userChar) ? prev : [userChar, ...prev],
    );
  }

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

          <section
            className={clsx(
              "mt-4 flex h-full w-full flex-col items-center justify-center rounded bg-[#282726] text-[#F9F4DA]",
              {
                "bg-[#10A95B]!": isGameWon,
                "bg-[#BA2A2A]!": isGameLost,
              },
            )}
          >
            {isGameOver ? (
              isGameWon ? (
                <>
                  <h2 className="text-xl font-medium">You win!</h2>
                  <p className="text-sm font-medium">Well done! 🎉</p>
                </>
              ) : (
                <>
                  <h2 className="text-xl font-medium">Game over!</h2>
                  <p className="text-sm font-medium">
                    You lose! Better start learning Assembly 😭
                  </p>
                </>
              )
            ) : null}
          </section>
        </header>

        {/* languages section */}

        <section className="flex w-xs flex-wrap items-center justify-center gap-1">
          {languages.map((lang, index) => (
            <div
              className="relative flex h-6 items-center justify-center rounded px-2 text-xs font-bold"
              style={{ background: lang.backgroundColor, color: lang.color }}
              key={lang.name}
            >
              {lang.name}
              {wrongGuessCount > index && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/70 text-sm">
                  💀
                </div>
              )}
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
              {userGuess.includes(char) ? char.toUpperCase() : ""}
            </span>
          ))}
        </div>

        {/* keyboard section */}

        <section className="flex w-md flex-wrap items-center justify-center gap-1">
          {alphabet.split("").map((char) => {
            const isGuessed = userGuess.includes(char);
            const isCorrect = isGuessed && currentWord.includes(char);
            const isWrong = isGuessed && !currentWord.includes(char);

            return (
              <button
                onClick={() => addUserGuess(char)}
                key={char}
                className={clsx(
                  "size-10 rounded border border-[#D7D7D7] bg-[#FCBA29] text-base font-semibold",
                  {
                    "bg-[#10A95B]!": isCorrect,
                    "bg-[#EC5D49]!": isWrong,
                  },
                )}
              >
                {char.toUpperCase()}
              </button>
            );
          })}
        </section>

        {/* new game button */}

        {isGameOver ? (
          <button className="flex h-10 w-72 items-center justify-center rounded border border-[#D7D7D7] bg-[#11B5E5] text-base font-semibold">
            New Game
          </button>
        ) : (
          <div className="h-10"></div>
        )}
      </main>
    </>
  );
}

export default App;
