import React from "react";
import "./Direction.css";

function Direction(props) {
  const handleDirection = () => {
    alert("Double Click on the for editing!😀");
  };
  return (
    <div className="direction">
      <button className="explanation-button" onClick={handleDirection}>
        <span role="img" aria-label="direction">
          🔎
        </span>
      </button>
      <div className="direction-elem">
        <big style={{ color: "rgb(255, 0, 170)" }}>●</big>start date
      </div>
      <div className="direction-elem">
        <big style={{ color: "rgb(59, 243, 182)" }}>●</big>today
      </div>
    </div>
  );
}

export default Direction;
