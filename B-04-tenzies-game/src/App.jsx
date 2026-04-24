import Die from "./components/Die";
import { useState } from "react";
import { nanoid } from "nanoid";
import Confetti from "./components/Confetti";

function App() {
  const [allValues, setAllValues] = useState(() => generateAllNewDice());

  let gameWon = false;

  /**
   * Challenge part 2:
   * 1. Create a new `gameWon` variable.
   * 2. If `gameWon` is true, change the button text to
   *    "New Game" instead of "Roll"
   */

  if (
    allValues.every((die) => die.isHeld) &&
    allValues.every((die) => die.value === allValues[0].value)
  ) {
    gameWon = true;
  }

  function generateAllNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      const rand = Math.ceil(Math.random() * 6);

      const randObj = { value: rand, isHeld: false, id: nanoid() };
      newDice.push(randObj);
    }
    return newDice;
  }

  function rollDice() {
    setAllValues((oldDice) =>
      oldDice.map((die) =>
        die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) },
      ),
    );

    if (gameWon) {
      gameWon = false;
      setAllValues(generateAllNewDice);
    }
  }

  function hold(id) {
    setAllValues((prevDice) =>
      prevDice.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die,
      ),
    );
  }
  return (
    <>
      {gameWon && <Confetti />}
      <div aria-live="polite" className="sr-only">
        {gameWon && (
          <p>Congratulations! You won! Press "New Game" to start again.</p>
        )}
      </div>
      <main className="flex h-screen w-screen items-center justify-center bg-[#0B2434]">
        <div className="flex size-96 flex-col items-center justify-evenly rounded-2xl bg-[#F5F5F5]">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-2xl font-black">Tenzies</h1>
            <p className="px-8 font-normal">
              Roll until all dice are the same. Click each die to freeze it at
              its current value between rolls.
            </p>
          </div>

          <div className="grid grid-cols-5 grid-rows-2 gap-4">
            {allValues.map((val) => (
              <Die
                key={val.id}
                id={val.id}
                number={val.value}
                isHeld={val.isHeld}
                hold={hold}
              />
            ))}
          </div>
          <button
            onClick={rollDice}
            className="h-10 w-32 cursor-pointer rounded-md bg-[#5035FF] pb-px text-xl font-bold text-white"
          >
            {gameWon ? "New Game" : "Roll"}
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
