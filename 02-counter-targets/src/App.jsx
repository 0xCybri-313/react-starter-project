import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const takeIt = () => {
    if (counter < 20) {
      counter++;
      setCounter(counter);
    }
  };

  const rejectIt = () => {
    if (counter > 0) {
      counter--;
      setCounter(counter);
    }
  };

  return (
    <>
      <h1>Mission Counter</h1>
      <h3>Current Mission = {counter}</h3>
      <button onClick={takeIt}>Take Mission</button>
      <br />
      <br />
      <button onClick={rejectIt}>Reject Mission</button>
    </>
  );
}

export default App;
