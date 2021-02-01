import React, { useContext } from "react";
import stones from "./Stones";
import { AppContext } from "./contexts/AppContext";

const Controls = () => {
  const {
    turtlePosition,
    setTurtlePosition,
    setDirection,
    applesEaten,
  } = useContext(AppContext);
  const moveTurtle = (direction) => {
    const options = {
      ArrowUp: true,
      ArrowDown: true,
      ArrowLeft: true,
      ArrowRight: true,
    };
    if (options[direction]) {
      switch (direction) {
        case "ArrowUp":
          if (
            turtlePosition[0] > 0 &&
            stones[turtlePosition[0] - 1][turtlePosition[1]]
          ) {
            setTurtlePosition([turtlePosition[0] - 1, turtlePosition[1]]);
            setDirection("up");
          }
          break;
        case "ArrowDown":
          if (
            turtlePosition[0] < 9 &&
            stones[turtlePosition[0] + 1][turtlePosition[1]]
          ) {
            setTurtlePosition([turtlePosition[0] + 1, turtlePosition[1]]);
            setDirection("down");
          }
          break;
        case "ArrowLeft":
          if (
            turtlePosition[1] > 0 &&
            stones[turtlePosition[0]][turtlePosition[1] - 1]
          ) {
            setTurtlePosition([turtlePosition[0], turtlePosition[1] - 1]);
            setDirection("left");
          }
          break;
        case "ArrowRight":
          if (
            turtlePosition[1] < 9 &&
            stones[turtlePosition[0]][turtlePosition[1] + 1]
          ) {
            setTurtlePosition([turtlePosition[0], turtlePosition[1] + 1]);
            setDirection("right");
          }
          break;
        default:
          throw new Error();
      }
    }
  };
  window.onkeydown = (e) => moveTurtle(e.code);
  return (
    <div style={{ marginTop: "50px" }}>
      <p>Apples Eaten: {applesEaten}</p>
      <div>
        <button onClick={() => moveTurtle("ArrowUp")}>Up</button>
        <div>
          <button onClick={() => moveTurtle("ArrowLeft")}>Left</button>
          <button onClick={() => moveTurtle("ArrowRight")}>Right</button>
        </div>
        <button onClick={() => moveTurtle("ArrowDown")}>Down</button>
      </div>
    </div>
  );
};

export default Controls;
