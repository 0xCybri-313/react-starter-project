import React, { useEffect, useState } from "react";

function Main() {
  const [memeData, setMemeData] = useState({
    topText: "One does not simply",
    bottomText: " Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function handleClicked(event) {
    const { value, name } = event.currentTarget;

    setMemeData((prev) => ({ ...prev, [name]: value }));
  }

  function getRandomMeme() {
    const randomNum = Math.floor(Math.random() * allMemes.length);

    const newMeme = allMemes[randomNum];

    setMemeData((prev) => ({ ...prev, imageUrl: newMeme.url }));
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
              value={memeData.topText}
            />
          </label>

          <label className="flex flex-col">
            <span>Bottom Text</span>
            <input
              className="rounded-md border-gray-500 bg-white px-4 py-2 shadow-md"
              type="text"
              placeholder="Walk into Mordor"
              name="bottomText"
              onChange={handleClicked}
              value={memeData.bottomText}
            />
          </label>
        </div>
        <button
          onClick={getRandomMeme}
          className="h-10 w-full rounded-md bg-linear-to-r from-[#672280] to-[#A626D3]"
        >
          Get a new meme image 🖼
        </button>
      </div>
      <div className="relative">
        <img src={memeData.imageUrl} />
        <span className="absolute top-4 right-1/4 text-3xl font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-shadow-black">
          {memeData.topText}
        </span>
        <span className="absolute right-1/4 bottom-4 text-3xl font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-shadow-black">
          {memeData.bottomText}
        </span>
      </div>
    </main>
  );
}

export default Main;
