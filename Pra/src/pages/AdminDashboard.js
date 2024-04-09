// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideMenu from "../components/SideMenu";
import MainSection from "../components/MainPage";

const App = () => {
  return (
    <div className="flex h-screen">
      <SideMenu />
      <MainSection />
    </div>
  );
};

export default App;
