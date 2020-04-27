import React from "react";
import "./css/Card.css";

const Card = (sol, day, high, low) => {
  return (
    <div className="card">
      <p className="card__sol">Sol 400</p>
      <p className="card__day">April 24</p>
      <div className="line"></div>
      <p className="high">
        25 <span>C</span>
      </p>
      <p className="low">
        -120 <span>C</span>
      </p>
    </div>
  );
};

export default Card;
