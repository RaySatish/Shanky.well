import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  const [showAll, setShowAll] = useState(false);

  const toggleSpecializations = () => {
    setShowAll(!showAll);
  };

  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img
            src={props.imgsrc}
            className="card-img-top"
            alt={props.imgsrc}
            height="300px"
            width="300px"
          />
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <h6><strong>Specializations:</strong></h6>
            {showAll ? (
              <p className="card-text">
                {props.specializations.map((specialization, index) => (
                  <span key={index}>
                    {specialization}
                    {index !== props.specializations.length - 1 && ", "}
                  </span>
                ))}
              </p>
            ) : (
              <p className="card-text">
                {props.specializations.slice(0, 3).map((specialization, index) => (
                  <span key={index}>
                    {specialization}
                    {index !== 2 && ", "}
                  </span>
                ))}
              </p>
            )}
            <p className="card-text">
              <strong>Meeting Time:</strong> {props.meetingTime}
            </p>
            {props.specializations.length > 3 && (
              <span onClick={toggleSpecializations} style={{ cursor: 'pointer', color: 'blue' }}>
                {showAll ? 'Show less ' : 'Show more '}
              </span>
            )}
           
           <p className="card-text">
              <strong>Email:</strong> {props.email}
            </p>

            <p className="card-text">
              <strong>Phone Number:</strong> {props.phone}
            </p>

         
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
