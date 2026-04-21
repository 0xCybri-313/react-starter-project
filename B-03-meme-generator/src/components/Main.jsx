import React, { useState } from "react";

function Main() {
  /**
   * Challenge: move the hardcoded meme info into React
   * state. Use an object with `topText`, `bottomText`,
   * and `imageUrl` properties, and set the initial values to
   * the ones hardcoded below.
   */
  const [memeData, setMemeData] = useState({
    topText: "One does not simply",
    bottomText: " Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  /**
   * Challenge: update the topText value in the meme state
   * object every time the topText input box is changed
   *
   * Note: don't worry about bottomText at this point.
   */

  function handleClicked(event) {
    const { value } = event.currentTarget;
    console.log(value);

    setMemeData((prev) => ({ ...prev, topText: value }));
  }

  return (
    <main className="flex w-xl flex-col items-center justify-center gap-4 p-8">
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <div className="flex w-full items-center justify-between gap-8">
          <label className="flex flex-col">
            <span>Top Text</span>
            <input
              className="rounded-md border-gray-500 bg-white px-4 py-2 shadow-md"
              type="text"
              placeholder="One does not simply"
              name="topText"
              onChange={handleClicked}
            />
          </label>

          <label className="flex flex-col">
            <span>Bottom Text</span>
            <input
              className="rounded-md border-gray-500 bg-white px-4 py-2 shadow-md"
              type="text"
              placeholder="Walk into Mordor"
              name="bottomText"
            />
          </label>
        </div>
        <button className="h-10 w-full rounded-md bg-linear-to-r from-[#672280] to-[#A626D3]">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="relative">
        <img src={memeData.imageUrl} />
        <span className="absolute top-4 right-1/4 text-3xl font-bold text-white text-shadow-black">
          {memeData.topText}
        </span>
        <span className="absolute right-1/4 bottom-4 text-3xl font-bold text-white text-shadow-black">
          {memeData.bottomText}
        </span>
      </div>
    </main>
  );
}

export default Main;
