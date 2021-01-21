import React, { useState } from "react";
import Board from "./components/Board";
import Controls from "./components/Controls";
import "./App.css";

const App = () => {
  const [turtlePosition, setTurtlePosition] = useState([0, 0]);
  const [direction, setDirection] = useState("right");

  return (
    <div className="App">
      <Board
        turtlePosition={turtlePosition}
        setTurtlePosition={setTurtlePosition}
        direction={direction}
      />
      <Controls
        turtlePosition={turtlePosition}
        setTurtlePosition={setTurtlePosition}
        direction={direction}
        setDirection={setDirection}
      />
    </div>
  );
};

export default App;
