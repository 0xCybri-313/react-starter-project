import { languages } from "./database/languages";

/**
 * Goal: Build out the main parts of our app
 *
 * Challenge:
 * 1. Save a "currentWord" in state. Initialize as "react".
 * 2. Map over the letters of the word (you'll need to turn
 *    the string into an array of letters first) and display
 *    each one as a <span>. Capitalize the letters when
 *    displaying them.
 * 3. Style to look like the design. You can get the underline
 *    effect on the box using `border-bottom`.
 */

function App() {
  const [currentWord, setCurrentWord] = useState("react");
  return (
    <>
      <main className="flex h-screen w-screen flex-col items-center justify-center gap-8 bg-[#282726] text-2xl text-white">
        <header className="flex h-36 w-sm flex-col items-center">
          <h1 className="text-xl font-medium text-[#F9F4DA]">
            Assembly: Endgame
          </h1>
          <p className="text-center text-sm font-medium text-[#8E8E8E]">
            Guess the word within 8 attempts to keep the programming world safe
            from Assembly!
          </p>
          <section className="mt-4 flex h-full w-full flex-col items-center justify-center rounded bg-[#10A95B] text-[#F9F4DA]">
            <h2 className="text-xl font-medium">You win!</h2>
            <p className="text-sm font-medium">Well done! 🎉</p>
          </section>
        </header>
        <section className="flex w-xs flex-wrap items-center justify-center gap-1">
          {languages.map((lang) => (
            <div
              className="flex h-6 items-center justify-center rounded px-2 text-xs font-bold"
              style={{ background: lang.backgroundColor, color: lang.color }}
              key={lang.name}
            >
              {lang.name}
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
