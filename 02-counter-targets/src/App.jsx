import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const takeIt = () => {
    counter++;
    console.log(counter);
    setCounter(counter);
  };

  const rejectIt = () => {
    counter--;
    setCounter(counter);
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
