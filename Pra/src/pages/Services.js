import React from "react";
import Card from "./Card";
import CardData from "./CardData";
import Navbar from "../components/NavBar";

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="my-5">
        <h1 className="text-center text-3xl font-bold">Professional Staff</h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> {/* Changed to grid layout */}
              {CardData.map((val, index) => {
                return (
                  <Card
                    key={index}
                    imgsrc={val.imgsrc}
                    name={val.name}
                    specializations={val.specializations}
                    meetingTime={val.meetingTime}
                    email = {val.email}
                    phone = {val.phone}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;