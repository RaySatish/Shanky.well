import React from "react";
import { NavLink } from "react-router-dom";
import CardMain from "../components/CardMain";

function Main() {
  return (
    <div className="flex flex-wrap justify-center items-center h-screen gap-6">
      <NavLink to="/home">
        <CardMain image="/img/patient.png" title="Student" />
      </NavLink>
      <NavLink to="/login?role=admin">
        <CardMain image="/img/doctor.png" title="Admin" />
      </NavLink>
      <NavLink to="/login?role=warden">
        <CardMain image="/img/warden.png" title="Warden" />
      </NavLink>
      <NavLink to="/login?role=chief-warden">
        <CardMain image="/img/warden.png" title="Chief Warden" />
      </NavLink>
    </div>
  );
}

export default Main;
