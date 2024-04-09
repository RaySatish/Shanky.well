import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

const NavbarMain = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-2 px-16 bg-blue-500 text-white">
      <div className="logo flex items-center font-bold text-xl">
        <img src="logo.png" alt="Logo" className="mr-2 w-12" />
        Shanky.well
      </div>
      <div className="profile relative">
        <span className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          Profile
        </span>
        {isOpen && (
          <ul className="dropdown absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
            <li className="px-4 py-2 hover:bg-blue-500 text-black hover:text-white">
              Logout
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavbarMain;
