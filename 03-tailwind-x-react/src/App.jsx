import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="m-auto flex w-fit animate-bounce rounded-md border-2 border-white p-4">
        Tailwind Test
      </h1>
      <div className="flex gap-2">
        <Card
          price={200}
          address="123 Wallaby Avenue, Park Road"
          bedroom={4}
          bathroom={2}
        />
        <Card
          price={400}
          address="978 Hell's Kitchen, New York"
          bedroom={8}
          bathroom={3}
        />
        <Card
          price={600}
          address="40th 10th Street, Down Town"
          bedroom={12}
          bathroom={6}
        />
      </div>
    </>
  );
}

export default App;
