import React, { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timeInterval = window.setInterval(() => {
      setTime(new Date());
      console.log("In timeInterval");                // Check console to see if interval function runs while clock is hidden
    }, 1000);
    return () => window.clearInterval(timeInterval); // Unmounts Clock component so that the interval function doesn't run while the clock is hidden
  }, []);

  return (
    <p className="clock">
      {time.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true
      })}
    </p>
  );
}

export default Clock;
