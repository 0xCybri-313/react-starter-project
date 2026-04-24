import React from "react";

function Die(props) {
  return (
    <button
      onClick={() => props.hold(props.id)}
      style={{ backgroundColor: props.isHeld ? "#59E391" : "white" }}
      className="size-12 cursor-pointer rounded-md bg-white text-xl font-bold shadow-md"
      aria-pressed={props.isHeld}
      aria-label={`Die with value ${props.value}, 
            ${props.isHeld ? "held" : "not held"}`}
    >
      {props.number}
    </button>
  );
}

export default Die;
