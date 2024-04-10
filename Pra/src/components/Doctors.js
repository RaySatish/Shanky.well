import React from 'react';
import Card from "./Card";
import CardData from "./CardData";

const Doctors = () => {
    return (
        <div className="container-fluid mb-5 mx-0 px-0">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {CardData.map((val, index) => {
                return (
                  <div key={index} className="col-span-1">
                    <Card
                      imgsrc={val.imgsrc}
                      name={val.name}
                      specializations={val.specializations}
                      meetingTime={val.meetingTime}
                      email={val.email}
                      phone={val.phone}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Doctors;