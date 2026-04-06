import React from "react";

function Entry(props) {
  return (
    <article className="mx-auto my-8 flex h-54 w-2xl">
      <div className="h-full w-40 shrink-0">
        <img
          className="h-full w-full shrink-0 rounded-md object-cover"
          src={props.data.img.src}
          alt={props.data.img.alt}
        />
      </div>
      <div className="flex flex-col justify-between p-8">
        <div className="flex flex-col justify-between gap-2">
          <p className="flex gap-2">
            <span className="flex items-center gap-2">
              <svg
                width="11"
                height="14"
                viewBox="0 0 7 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.57866 5.25002C2.65532 5.25002 1.90837 4.50221 1.90837 3.57965C1.90837 2.65757 2.65532 1.90911 3.57866 1.90911C4.50167 1.90911 5.24927 2.65757 5.24927 3.57965C5.24927 4.50221 4.50167 5.25002 3.57866 5.25002ZM3.48394 0C1.54227 0 0 1.63678 0 3.65569C0 6.40791 2.95078 9.25191 2.95078 9.25191C3.34777 9.62783 3.59437 9.65847 4.01646 9.25191C4.01646 9.25191 7 6.40791 7 3.65569C7 1.63678 5.42544 0 3.48394 0Z"
                  fill="#F55A5A"
                />
              </svg>
              <span className="font-inter text-base leading-1 font-normal tracking-widest">
                {props.data.country.toUpperCase()}
              </span>
            </span>
            <a
              className="text-sm text-gray-500 underline"
              href={props.data.googleMapsLink}
            >
              View on Google Maps
            </a>
          </p>
          <h2 className="font-inter text-2xl font-bold">{props.data.title}</h2>
        </div>
        <div className="flex flex-col justify-between gap-2">
          <p className="font-inter font-bold">{props.data.dates}</p>
          <p className="line-clamp-3 text-xs font-normal">{props.data.text}</p>
        </div>
      </div>
    </article>
  );
}

export default Entry;
