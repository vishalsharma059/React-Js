import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log("Cancel the interval");
    };
  }, [setTime]);

  return (
    <>
      <div className="text-white">
        <h1>Bharat Clock</h1>
        <p cla>
          This is the current time: {time.toLocaleDateString()} -{" "}
          {time.toLocaleTimeString()}
        </p>
      </div>
    </>
  );
};

export default CurrentTime;
