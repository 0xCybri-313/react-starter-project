import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = useState("No Data");
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/0xCybri-313")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  return (
    <div className="flex h-16 w-full items-center justify-evenly bg-gray-700 text-2xl font-bold text-white">
      <span> Github follower: {data.followers}</span>

      <img
        className="size-12 rounded-full"
        src={data.avatar_url}
        alt="Github Profile"
      />
    </div>
  );
}

export default Github;

// Better in new file
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/0xCybri-313");
  return response.json();
};
