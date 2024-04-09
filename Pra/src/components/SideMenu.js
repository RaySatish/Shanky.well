// SideMenu.js
import React from "react";
import { NavLink } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="bg-gray-800 text-white w-64 flex flex-col">
      <div className="flex-shrink-0 py-4 px-6 bg-gray-900">
        <h1 className="text-xl font-bold">Side Menu</h1>
      </div>
      <div className="flex-grow overflow-y-auto">
        <ul className="py-4">
          <li>
            <NavLink
              to="/dashboard"
              className="block py-2 px-6 text-sm hover:bg-gray-700"
              activeClassName="bg-gray-700"
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className="block py-2 px-6 text-sm hover:bg-gray-700"
              activeClassName="bg-gray-700"
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              className="block py-2 px-6 text-sm hover:bg-gray-700"
              activeClassName="bg-gray-700"
            >
              Settings
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
