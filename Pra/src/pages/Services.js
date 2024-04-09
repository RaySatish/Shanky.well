import React from "react";
import Card from "./Card";
import CardData from "./CardData";

const Services = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Professional Staff</h1>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
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
