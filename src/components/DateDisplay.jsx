import React from "react";

const DateDisplay = () => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="date">
      <span>{currentDate}</span>
    </div>
  );
};

export default DateDisplay;
