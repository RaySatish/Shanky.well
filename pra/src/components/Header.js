import React from "react";

const Header = (props) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center p-6">{props.title}</h1>
      <hr className="bg-blue-500 h-1/2 w-1/2 mx-auto rounded-full mb-5" />
      <p className="text-lg text-center pb-5 border-b border-gray-300">
        {props.description}
      </p>
    </div>
  );
};

export default Header;
