import React from "react";

const TimeAndWatches = ({time, watches}: { time: string, watches: number }) => {
  return (
    <div className="timeAndWatches">
      <p className="time">{time}</p>
      <p className="watches">{watches}</p>
    </div>
  );
};

export default TimeAndWatches;
