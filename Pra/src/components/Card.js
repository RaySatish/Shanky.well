// import React from "react";
// import { NavLink } from "react-router-dom";

// const Card = ({ title, src, to }) => {
//   return (
//     <NavLink
//       exact
//       to={to}
//       className="inline-block rounded-lg overflow-hidden shadow-lg hover:shadow-xl"
//     >
//       <div className="relative">
//         <img src={src} alt={title} className="w-full h-72 object-cover" />
//         <div className="absolute inset-0 bg-black opacity-30"></div>
//         <div className="absolute inset-0 flex justify-center items-center">
//           <h2 className="text-white text-3xl font-semibold text-center">
//             {title}
//           </h2>
//         </div>
//       </div>
//     </NavLink>
//   );
// };

// export default Card;

import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ imageSrc, title, description, to }) => {
  return (
    <NavLink
      to={to}
      className="flex flex-col shadow-md mx-4 my-6"
      style={{ maxWidth: "300px" }}
    >
      <div className="overflow-hidden">
        <img
          src={`img/${imageSrc}.png`}
          alt=""
          className="w-full h-48 object-cover transition-transform duration-200 transform hover:scale-110"
        />
      </div>
      <div className="p-4 bg-white">
        <h3 className="text-black-600 font-bold text-xl mb-4 uppercase">
          {title}
        </h3>
        <p className="text-black leading-relaxed">{description}</p>
      </div>
    </NavLink>
  );
};

export default Card;
