import React from "react";

const DateDisplay = () => {
  const currentDate = new Date().toLocaleDateString("en-GB");
  
  return (
    <div className="date">
      <span>{currentDate}</span>
    </div>
  );
};

export default DateDisplay;
