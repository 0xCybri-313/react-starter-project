import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberState, setNumberState] = useState(false);
  const [charState, setCharState] = useState(false);
  const [password, setPassword] = useState("");

  // useRef Hooks
  const passwordRef = useRef(null);

  const passGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberState) str += "0123456789";
    if (charState) str += "`!@#$%^&*(){}[]+-=";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberState, charState, setPassword]);

  const copyPass = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passGen();
  }, [length, numberState, charState, passGen]);

  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="flex w-md flex-col items-center gap-4 rounded-2xl bg-gray-700 p-4">
          <h1 className="text-2xl font-extrabold text-white">
            Password Generator
          </h1>
          <div className="flex w-full items-center justify-center">
            <input
              type="text"
              value={password}
              className="w-72 rounded-l-2xl bg-white px-3 py-2 text-black outline-none"
              placeholder="Password"
              readOnly
              ref={passwordRef}
            />
            <button
              onClick={copyPass}
              className="shrink-0 rounded-r-2xl bg-blue-700 px-3 py-2 font-bold text-white outline-none"
            >
              Copy
            </button>
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <input
                id="length"
                type="range"
                min={8}
                max={32}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label className="font-bold text-white" htmlFor="length">
                Length = {length}
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                defaultChecked={numberState}
                id="number-state"
                onChange={() => {
                  setNumberState((prev) => !prev);
                }}
              />
              <label className="font-bold text-white" htmlFor="number-status">
                Number
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                defaultChecked={charState}
                id="char-state"
                onChange={() => {
                  setCharState((prev) => !prev);
                }}
              />
              <label className="font-bold text-white" htmlFor="char-status">
                Char
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
