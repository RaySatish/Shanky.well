// import React from "react";

// const Header = (props) => {
//   return (
//     <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-12">
//       <h1 className="text-4xl font-bold text-center">{props.title}</h1>
//       <hr className="bg-white h-1 w-16 mx-auto my-6 rounded-full" />
//       <p className="text-lg text-center pb-5 mx-auto max-w-3xl">
//         {props.description}
//       </p>
//     </div>
//   );
// };

// export default Header;

import React from "react";

const Header = ({ title, description }) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-12">
      <h1 className="text-4xl font-bold text-center">{title}</h1>
      <hr className="border-t border-white my-6 w-1/4 mx-auto" />
      <p className="text-lg text-center px-8">{description}</p>
    </div>
  );
};

export default Header;
