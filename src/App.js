import React, { useState } from "react";
import Clock from "./Clock";

function App() {

  const [showClock, setShowClock] = useState(true);

  return (
    <div className="App">
      {showClock && <Clock />}
      <button className="clock-toggle" onClick={() => setShowClock(!showClock)}>
        {showClock ? "Hide clock" : "Show clock"}
      </button>
    </div>
  );
}

export default App;
