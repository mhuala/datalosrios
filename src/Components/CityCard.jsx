import React from "react";

export default function CityCard(props) {
  return (
    <button
      className="flex h-32 w-64 bg-center bg-cover border border-white shadow-lg "
      style={{
        backgroundImage: `url("images/cities-thumbnails/t-${props.city}.jpg")`,
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
        <div className="text-center">
          <a href={props.city}>
            <h1 className="text-lg font-semibold text-white uppercase lg:text-3xl tracking-widest hover:text-pink-500 hover:scale-105 transition transform duration-500 cursor-pointer">
              {props.city}
            </h1>
          </a>
        </div>
      </div>
    </button>
  );
}
