import { languages } from "./database/languages";
import { useState } from "react";
import { clsx } from "clsx";
import { getFarewellText, getRandomWord } from "./utils";
import Confetti from "./Confetti";
Confetti;

function App() {
  // State values

  const [currentWord, setCurrentWord] = useState(() => getRandomWord());

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

  const lastGuessedLetter = userGuess[userGuess.length - 1];
  const isLastGuessIncorrect =
    lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

  // Static values

  const wordChar = currentWord.split("");

  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function addUserGuess(userChar) {
    setUserGuess((prev) =>
      prev.includes(userChar) ? prev : [...prev, userChar],
    );
  }

  function renderGameStatus() {
    if (!isGameOver && isLastGuessIncorrect) {
      let farewell = "";
      languages.map((lang, index) => {
        if (wrongGuessCount > index) {
          farewell = getFarewellText(lang.name);
          console.log(farewell);
        }
      });

      return <h2 className="text-xl font-medium">{farewell}</h2>;
    }

    if (isGameWon) {
      return (
        <>
          <h2 className="text-xl font-medium">You win!</h2>
          <p className="text-sm font-medium">Well done! 🎉</p>
        </>
      );
    }

    if (isGameLost) {
      return (
        <>
          <h2 className="text-xl font-medium">Game over!</h2>
          <p className="text-sm font-medium">
            You lose! Better start learning Assembly 😭
          </p>
        </>
      );
    }
  }

  // reset game

  function resetGame() {
    setCurrentWord(getRandomWord);
    setUserGuess([]);
  }

  return (
    <>
      {isGameWon && <Confetti recycle={false} numberOfPieces={1000} />}
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
                "bg-[#7A5EA7]!": wrongGuessCount >= 1,
              },
            )}
          >
            {renderGameStatus()}
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
          {wordChar.map((char, index) => {
            const shouldRevealLetter = isGameLost || userGuess.includes(char);
            isGameLost && !userGuess.includes(char) && "missed-letter";
            return (
              <span
                key={index}
                className={clsx(
                  "flex size-10 items-center justify-center border-b-2 border-b-[#F9F4DA] bg-[#323232] text-xl font-bold text-[#F9F4DA]",
                  {
                    "text-[#EC5D49]!": isGameLost && !userGuess.includes(char),
                  },
                )}
              >
                {shouldRevealLetter ? char.toUpperCase() : ""}
              </span>
            );
          })}
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
                disabled={isGameOver}
                className={clsx(
                  "relative size-10 rounded border border-[#D7D7D7] bg-[#FCBA29] text-base font-semibold",
                  {
                    "bg-[#10A95B]!": isCorrect,
                    "bg-[#EC5D49]!": isWrong,
                  },
                )}
              >
                {char.toUpperCase()}
                {isGameOver && (
                  <div className="absolute inset-0 bg-white/25"></div>
                )}
              </button>
            );
          })}
        </section>

        {/* new game button */}

        {isGameOver ? (
          <button
            onClick={resetGame}
            className="flex h-10 w-72 items-center justify-center rounded border border-[#D7D7D7] bg-[#11B5E5] text-base font-semibold"
          >
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
