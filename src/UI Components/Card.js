import React from "react";

import "./Card.css";

const Card = (props) => {
  return (
    <div>
      <div className="cardTile">{props.disease}</div>
    </div>
  );
};

export default Card;
