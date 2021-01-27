import React from "react";
import stones from "./Stones";

const Controls = ({
  turtlePosition,
  setTurtlePosition,
  direction,
  setDirection,
}) => {
  const moveTurtle = (direction) => {
    switch (direction) {
      case "up":
        if (
          turtlePosition[0] > 0 &&
          stones[turtlePosition[0] - 1][turtlePosition[1]]
        ) {
          setTurtlePosition([turtlePosition[0] - 1, turtlePosition[1]]);
          setDirection("up");
        }
        break;
      case "down":
        if (
          turtlePosition[0] < 9 &&
          stones[turtlePosition[0] + 1][turtlePosition[1]]
        ) {
          setTurtlePosition([turtlePosition[0] + 1, turtlePosition[1]]);
          setDirection("down");
        }
        break;
      case "left":
        if (
          turtlePosition[1] > 0 &&
          stones[turtlePosition[0]][turtlePosition[1] - 1]
        ) {
          setTurtlePosition([turtlePosition[0], turtlePosition[1] - 1]);
          setDirection("left");
        }
        break;
      case "right":
        if (
          turtlePosition[1] < 9 &&
          stones[turtlePosition[0]][turtlePosition[1] + 1]
        ) {
          setTurtlePosition([turtlePosition[0], turtlePosition[1] + 1]);
          setDirection("right");
        }
        break;
      default:
        break;
    }
  };
  return (
    <div style={{ marginTop: "50px" }}>
      <button onClick={() => moveTurtle("up")}>Up</button>
      <div>
        <button onClick={() => moveTurtle("left")}>Left</button>
        <button onClick={() => moveTurtle("down")}>Down</button>
        <button onClick={() => moveTurtle("right")}>Right</button>
      </div>
    </div>
  );
};

export default Controls;
