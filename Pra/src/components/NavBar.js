import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../contexts/AuthProvider";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { auth, setAuth, logout } = useContext(AuthContext);

  useEffect(() => {
    if (auth.token) setIsLoggedIn(true);
    else setIsLoggedIn(false);
  }, [auth]);

  function handleLogout(e) {
    e.preventDefault();
    const res = window.confirm("Do you want to log out");
    if (res) {
      logout();
    }
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="py-5 bg-white sticky top-0 border-b border-gray-100 z-50">
      <div className="container md:px-12 md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center">
            <img src="logo.png" className="h-16 mr-3" alt="logo" />
            <span className="text-2xl text-gray-900 font-sans font-bold">
              Shanky.well
            </span>
          </NavLink>
          <span className="block mx-2 text-3xl bg-gray-100 p-2 rounded-lg md:hidden">
            <svg
              name="menu"
              onClick="Menu(this)"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.7"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </span>
        </div>
        <ul className="p-5 z-10 absolute bg-white/80 backdrop-blur w-full left-0 py-4 opacity-0 top-[-400px] transition-all ease-in duration-500 md:p-0 md:flex md:items-center md:space-x-8 md:static md:w-auto md:opacity-100">
          <NavLink
            to="/"
            className="font-medium duration-500 text-gray-900 hover:text-indigo-600"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="font-medium duration-500 text-gray-900 hover:text-indigo-600"
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className="font-medium duration-500 text-gray-900 hover:text-indigo-600"
          >
            Our Counsellor
          </NavLink>
          <NavLink
            to="/chat/joinpage"
            className="font-medium duration-500 text-gray-900 hover:text-indigo-600"
          >
            Community
          </NavLink>
          <NavLink
            to="/videochatwithdoctor"
            className="font-medium duration-500 text-gray-900 hover:text-indigo-600"
          >
            FreeCall
          </NavLink>


          {!isLoggedIn ? (
            <>
              <NavLink
                to="/login"
                className="font-medium duration-500 text-gray-900 hover:text-indigo-600"
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className="font-medium duration-500 text-gray-900 hover:text-indigo-600"
              >
                Signup
              </NavLink>
            </>
          ) : (
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="font-medium duration-500 text-gray-900 hover:text-indigo-600"
              >
                Accounts
                {/* <svg
                  className="h-5 w-5 ml-1 text-gray-700"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M3 6a3 3 0 013-3h8a3 3 0 013 3v8a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm3-2a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1V5a1 1 0 00-1-1H6z"
                    clipRule="evenodd"
                  />
                </svg> */}
              </button>
              {isDropdownOpen && (
                <ul className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-20">
                  <li>
                    <NavLink
                      to="/edit-profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Edit Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/update-password"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Update Password
                    </NavLink>
                  </li>
                  <li>
                    <button
                      to="/logout"
                      className="block px-4 py-2 w-100 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
