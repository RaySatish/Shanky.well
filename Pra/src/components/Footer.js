import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [phoneNumber, setPhoneNumber] = useState(""); // State to store the phone number

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (phoneNumber.trim() !== "") {
      // Check if phone number is not empty
      alert(`Your Response is submitted. Phone Number: ${phoneNumber}`);
      setPhoneNumber(""); // Clear the input field
    } else {
      alert("Please enter a valid phone number."); // Alert if phone number is empty
    }
  };

  const handleChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <footer className="bg-gray-200 border-t border-gray-300">
      <div className="mx-auto max-w-7xl px-6 pb-4 pt-8 sm:pt-8 lg:px-8 lg:pt-12">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <h5 className="text-gray-900">Contact Information</h5>
            <p className="text-gray-600">New Delhi, India</p>
            <p className="text-gray-600">
              Email:{" "}
              <a href="mailto:hola@felicity.care" className="text-blue-500 hover:text-blue-600">
                hello.shankywell@gmail.com
              </a>
            </p>
            <p className="text-gray-600">Phone: +916200891968</p>
          </div>
          <div className="space-y-8">
            <h5 className="text-gray-900">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <NavLink to="/corporates" className="text-blue-500 hover:text-blue-600">
                  For Corporates
                </NavLink>
              </li>
              <li>
                <NavLink to="/therapists" className="text-blue-500 hover:text-blue-600">
                  For Counselors
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-blue-500 hover:text-blue-600">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-blue-500 hover:text-blue-600">
                  About us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="space-y-8">
            <h5 className="text-gray-900">Legal Stuff</h5>
            <ul className="list-unstyled">
              <li>
                <NavLink to="/disclaimer" className="text-blue-500 hover:text-blue-600">
                  Disclaimer
                </NavLink>
              </li>
              <li>
                <NavLink to="/privacy-policy" className="text-blue-500 hover:text-blue-600">
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink to="/terms-of-service" className="text-blue-500 hover:text-blue-600">
                  Terms Of Service
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-4" />
        <p className="text-center mb-0 text-gray-600">We're here to ensure your constant joy.</p>
        <form className="mt-4 form_phone" onSubmit={handleSubmit}>
          <div className="flex justify-center items-center"> {/* Centering content horizontally and aligning items center */}
            <div className="flex justify-end">
              <form onSubmit={handleSubmit}>
                <div className="flex justify-end">
                  <div className="flex-1 mr-2">
                    <input
                      type="tel"
                      className="form-control py-2 px-4 w-60"
                      placeholder="Enter Phone Number"
                      value={phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                  <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Request Callback
                  </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </form>
        <p className="text-center mt-4 mb-0 text-gray-600">&copy; Shanky.well. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
