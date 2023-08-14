import React from "react";
import "./App.css";
import EightBall from "./EightBall";

function App() {
  return (
    <div className="App">
      <EightBall />
      <div><button onClick={() => window.location.reload(false)}>Reload!</button></div>
    </div>
  );
}

export default App;
