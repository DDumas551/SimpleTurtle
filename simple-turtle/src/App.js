import React, { useState } from "react";
import Board from "./components/Board";
import Controls from "./components/Controls";
import "./App.css";

const App = () => {
  const [turtlePosition, setTurtlePosition] = useState([0, 0]);
  const [direction, setDirection] = useState("right");
  const [applesEaten, setApplesEaten] = useState(-1);

  return (
    <div className="App">
      <h1>Simple Turtle</h1>
      <Board
        turtlePosition={turtlePosition}
        setTurtlePosition={setTurtlePosition}
        direction={direction}
        setApplesEaten={setApplesEaten}
        applesEaten={applesEaten}
      />
      <Controls
        turtlePosition={turtlePosition}
        setTurtlePosition={setTurtlePosition}
        direction={direction}
        setDirection={setDirection}
        applesEaten={applesEaten}
      />
    </div>
  );
};

export default App;
