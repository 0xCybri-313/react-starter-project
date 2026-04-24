import Die from "./components/Die";
import { useState, useEffect, useRef } from "react";
import { nanoid } from "nanoid";
import Confetti from "./components/Confetti";

function App() {
  const [allValues, setAllValues] = useState(() => generateAllNewDice());
  const newGameRef = useRef(null);

  console.log(newGameRef);

  /**
   * Challenge:
   * Make it so when the game is over, the "New Game" button
   * automatically receives keyboard focus so keyboard users
   * can easily trigger that button without having to tab
   * through all the dice first.
   *
   * Hints:
   * 1. Focusing a DOM element with the DOMNode.focus() method
   *    requires accessing the native DOM node. What tool have
   *    we learned about that allows us to do that?
   *
   * 2. Automatically calling the .focus() on a DOM element when
   *    the game is won requires us to synchronize the local
   *    `gameWon` variable with an external system (the DOM). What
   *    tool have we learned about that allows us to do that?
   */

  let gameWon = false;

  if (
    allValues.every((die) => die.isHeld) &&
    allValues.every((die) => die.value === allValues[0].value)
  ) {
    gameWon = true;
  }

  useEffect(() => {
    if (gameWon) {
      newGameRef.current.focus();
    }
  }, [gameWon]);

  function generateAllNewDice() {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      const rand = Math.ceil(Math.random() * 6);

      const randObj = { value: 5, isHeld: false, id: nanoid() };
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
            ref={newGameRef}
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
