import React from "react";
import { NavLink } from "react-router-dom";
import web from '../Images/homepage.jpg'

const HeroSection = () => {
  return (
    <section id="home" className="py-5">
      <div className="container flex flex-wrap items-center justify-center mx-auto mt-10 md:px-12 md:flex-row">
        <div className="mb-14 lg:mb-0 lg:w-1/2">
          <h1 className="max-w-xl text-[2.2rem] leading-none text-gray-900 font-extrabold font-sans text-center md:text-5xl lg:text-left lg:leading-tight mb-5">
            Specialized Help For Your Mental Health
          </h1>
          <p className="max-w-xl text-center text-gray-500 lg:text-left lg:max-w-md">
            We offer personalized support and therapy for various mental health issues.
          </p>
          <div className="flex justify-center mt-14 lg:justify-start">
            <NavLink
              to="/start"
              className="text-white bg-indigo-600 font-medium rounded-lg text-md px-5 py-4 text-center hover:bg-indigo-700 hover:drop-shadow-md transition duration-300 ease-in-out"
            >
              Get Started
            </NavLink>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img className="ml-auto rounded-lg" src={web} alt="homepage img" style={{ borderRadius: "10px" }} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
