import React from "react";

const Controls = ({
  turtlePosition,
  setTurtlePosition,
  direction,
  setDirection,
}) => {
  const moveTurtle = (direction) => {
    // console.log(direction, turtlePosition);

    switch (direction) {
      case "up":
        if (turtlePosition[0] > 0) {
          setTurtlePosition([turtlePosition[0] - 1, turtlePosition[1]]);
          setDirection("up");
        }
        break;
      case "down":
        if (turtlePosition[0] < 9) {
          setTurtlePosition([turtlePosition[0] + 1, turtlePosition[1]]);
          setDirection("down");
        }
        break;
      case "left":
        if (turtlePosition[1] > 0) {
          setTurtlePosition([turtlePosition[0], turtlePosition[1] - 1]);
          setDirection("left");
        }
        break;
      case "right":
        if (turtlePosition[1] < 9) {
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
