import React, { useEffect, useState } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return <div>{time.toLocaleTimeString()}</div>;
};

export default DigitalClock;
