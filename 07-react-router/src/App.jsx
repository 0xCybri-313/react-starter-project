import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center bg-gray-700">
        <h1 className="text-9xl font-bold text-white">React Router</h1>
      </div>
    </>
  );
}

export default App;
