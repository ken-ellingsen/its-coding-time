import React, { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timeInterval = window.setInterval(() => {
      setTime(new Date());
    }, 1000);
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
