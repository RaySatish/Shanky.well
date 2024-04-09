// Card.js
import React, { useState } from "react";

const Card = (props) => {
  const [showAll, setShowAll] = useState(false);

  const toggleSpecializations = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="w-full md:w-full lg:w-full p-4">
      <div className="card bg-white rounded-lg shadow-lg">
        <img
          src={props.imgsrc}
          className="card-img-top rounded-t-lg object-cover h-72 w-full"
          alt={props.imgsrc}
        />
        <div className="card-body p-4">
          <h5 className="card-title text-xl font-bold mb-2">{props.name}</h5>
          <h6 className="text-sm font-bold mb-2">
            <strong>Specializations:</strong>
          </h6>
          {showAll ? (
            <p className="card-text text-sm mb-2">
              {props.specializations.map((specialization) => (
                <span key={specialization.id}>
                  {specialization.name}
                  {specialization.id !==
                    props.specializations[props.specializations.length - 1]
                      .id && ", "}
                </span>
              ))}
            </p>
          ) : (
            <p className="card-text text-sm mb-2">
              {props.specializations.slice(0, 3).map((specialization) => (
                <span key={specialization.id}>
                  {specialization.name}
                  {specialization.id !== props.specializations[2].id && ", "}
                </span>
              ))}
            </p>
          )}
          <p className="card-text text-sm mb-2">
            <strong>Meeting Time:</strong> {props.meetingTime}
          </p>
          {props.specializations.length > 3 && (
            <span
              onClick={toggleSpecializations}
              className="text-blue-500 cursor-pointer"
            >
              {showAll ? "Show less " : "Show more "}
            </span>
          )}

          <p className="card-text text-sm mb-2">
            <strong>Email:</strong> {props.email}
          </p>

          <p className="card-text text-sm mb-2">
            <strong>Phone Number:</strong> {props.phone}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
