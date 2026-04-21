import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <main className="flex h-screen w-screen flex-col items-center justify-center bg-gray-400">
        <Header />
        <Main />
      </main>
    </>
  );
}

export default App;
