import React, { useState } from "react";

const Card = (props) => {
  const [showAll, setShowAll] = useState(false);

  const toggleSpecializations = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="w-full md:w-1/2 lg:w-1/4 p-4"> {/* Adjusted column width */}
      <div className="card bg-white rounded-lg shadow-lg">
        <img
          src={props.imgsrc}
          className="card-img-top rounded-t-lg object-cover h-48 w-full"
          alt={props.imgsrc}
        />
        <div className="card-body p-4">
          <h5 className="card-title text-xl font-bold mb-2">{props.name}</h5>
          <h6 className="text-sm font-bold mb-2"><strong>Specializations:</strong></h6>
          {showAll ? (
            <p className="card-text text-sm mb-2">
              {props.specializations.map((specialization, index) => (
                <span key={index}>
                  {specialization}
                  {index !== props.specializations.length - 1 && ", "}
                </span>
              ))}
            </p>
          ) : (
            <p className="card-text text-sm mb-2">
              {props.specializations.slice(0, 3).map((specialization, index) => (
                <span key={index}>
                  {specialization}
                  {index !== 2 && ", "}
                </span>
              ))}
            </p>
          )}
          <p className="card-text text-sm mb-2">
            <strong>Meeting Time:</strong> {props.meetingTime}
          </p>
          {props.specializations.length > 3 && (
            <span onClick={toggleSpecializations} className="text-blue-500 cursor-pointer">
              {showAll ? 'Show less ' : 'Show more '}
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