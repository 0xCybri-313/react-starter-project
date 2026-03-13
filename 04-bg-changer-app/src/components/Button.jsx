import React from "react";

function Button(props) {
  return (
    <button
      className="w-20 cursor-pointer rounded-3xl py-2 font-bold text-white shadow-md transition-all duration-300 ease-out outline-none hover:h-10 hover:-translate-y-4 hover:scale-150 hover:rounded-full"
      style={{ backgroundColor: props.color.toLowerCase() }}
      onClick={() => props.onColorChange(props.color.toLowerCase())}
    >
      {props.color}
    </button>
  );
}

export default Button;
