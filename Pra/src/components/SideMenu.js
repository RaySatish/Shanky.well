import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const SideMenu = ({ menuItems }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions here (e.g., clear local storage, etc.)
    navigate("/");
  };

  return (
    <div className="bg-gray-800 text-white w-64 flex flex-col">
      <div className="flex items-center flex-shrink-0 py-4 px-2 bg-gray-900">
        <img src="logo.png" alt="" className="mr-2 w-12" />
        <h1 className="text-xl font-bold">Shanky.well</h1>
      </div>
      <div className="flex-grow overflow-y-auto">
        <ul className="py-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.to}
                className="block py-2 px-6 text-sm hover:bg-gray-700"
                activeClassName="bg-gray-700"
              >
                {item.name}
              </NavLink>
            </li>
          ))}
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
