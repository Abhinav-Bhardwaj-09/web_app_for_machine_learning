import React from "react";

import "./Card.css";

const Card = (props) => {
  return (
    <div>
      <div className="cardTile btn">{props.disease}</div>
    </div>
  );
};

export default Card;
