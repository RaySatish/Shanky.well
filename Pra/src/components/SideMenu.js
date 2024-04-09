// SideMenu.js
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const SideMenu = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions here (e.g., clear local storage, etc.)
    navigate("/main");
  };

  return (
    <div className="bg-gray-800 text-white w-64 flex flex-col">
      <div className="flex-shrink-0 py-4 px-6 bg-gray-900">
        <img src="logo.png" alt="" className="mr-2 w-12" />
        <h1 className="text-xl font-bold">Shanky.well</h1>
      </div>
      <div className="flex-grow overflow-y-auto">
        <ul className="py-4">
          <li>
            <NavLink
              to="/admin/dashboard"
              className="block py-2 px-6 text-sm hover:bg-gray-700"
              activeClassName="bg-gray-700"
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/profile"
              className="block py-2 px-6 text-sm hover:bg-gray-700"
              activeClassName="bg-gray-700"
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/settings"
              className="block py-2 px-6 text-sm hover:bg-gray-700"
              activeClassName="bg-gray-700"
            >
              Settings
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-shrink-0 py-4">
        <button
          onClick={handleLogout}
          className="block py-2 px-6 text-sm hover:bg-gray-700 w-full text-left"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default SideMenu;
