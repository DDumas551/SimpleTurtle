import React, { useState } from "react";
import stones from "./Stones";

const Controls = ({ turtlePosition, setTurtlePosition, setDirection }) => {
  const [clicks, setClicks] = useState(0);
  const moveTurtle = (direction) => {
    switch (direction) {
      case "ArrowUp":
        if (
          turtlePosition[0] > 0 &&
          stones[turtlePosition[0] - 1][turtlePosition[1]]
        ) {
          setClicks(clicks + 1);
          setTurtlePosition([turtlePosition[0] - 1, turtlePosition[1]]);
          setDirection("up");
        }
        break;
      case "ArrowDown":
        if (
          turtlePosition[0] < 9 &&
          stones[turtlePosition[0] + 1][turtlePosition[1]]
        ) {
          setClicks(clicks + 1);
          setTurtlePosition([turtlePosition[0] + 1, turtlePosition[1]]);
          setDirection("down");
        }
        break;
      case "ArrowLeft":
        if (
          turtlePosition[1] > 0 &&
          stones[turtlePosition[0]][turtlePosition[1] - 1]
        ) {
          setClicks(clicks + 1);
          setTurtlePosition([turtlePosition[0], turtlePosition[1] - 1]);
          setDirection("left");
        }
        break;
      case "ArrowRight":
        if (
          turtlePosition[1] < 9 &&
          stones[turtlePosition[0]][turtlePosition[1] + 1]
        ) {
          setClicks(clicks + 1);
          setTurtlePosition([turtlePosition[0], turtlePosition[1] + 1]);
          setDirection("right");
        }
        break;
      default:
        break;
    }
  };
  window.onkeydown = (e) => moveTurtle(e.code);
  return (
    <div style={{ marginTop: "50px" }}>
      <p>Moves: {clicks}</p>
      <div>
        <button onClick={() => moveTurtle("ArrowUp")}>Up</button>
        <div>
          <button onClick={() => moveTurtle("ArrowLeft")}>Left</button>
          <button onClick={() => moveTurtle("ArrowDown")}>Down</button>
          <button onClick={() => moveTurtle("ArrowRight")}>Right</button>
        </div>
      </div>
    </div>
  );
};

export default Controls;
