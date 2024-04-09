import React from "react";

function CardMain({ image, title }) {
  return (
    <div className="max-w-xs mx-auto overflow-hidden rounded shadow-lg transform hover:scale-105 transition duration-300">
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 py-4 text-center">
        <div className="font-bold text-xl mb-2 uppercase">{title}</div>
      </div>
    </div>
  );
}

export default CardMain;
