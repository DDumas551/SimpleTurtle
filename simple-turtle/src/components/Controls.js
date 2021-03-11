import React, { useContext } from "react";
import stones from "./Stones";
import { AppContext } from "./contexts/AppContext";

const Controls = () => {
  const {
    turtlePosition,
    rabbitPosition,
    setRabbitPosition,
    setTurtlePosition,
    setDirection,
    setRabbitDirection,
    applesEaten,
    carrotsEaten,
    windowWidth,
  } = useContext(AppContext);
  const moveTurtle = (direction) => {
    const options = {
      ArrowUp: true,
      ArrowDown: true,
      ArrowLeft: true,
      ArrowRight: true,
      KeyW: true,
      KeyA: true,
      KeyS: true,
      KeyD: true,
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
        case "KeyW":
          if (
            rabbitPosition[0] > 0 &&
            stones[rabbitPosition[0] - 1][rabbitPosition[1]]
          ) {
            setRabbitPosition([rabbitPosition[0] - 1, rabbitPosition[1]]);
            setRabbitDirection("up");
          }
          break;
        case "KeyS":
          if (
            rabbitPosition[0] < 9 &&
            stones[rabbitPosition[0] + 1][rabbitPosition[1]]
          ) {
            setRabbitPosition([rabbitPosition[0] + 1, rabbitPosition[1]]);
            setRabbitDirection("down");
          }
          break;
        case "KeyA":
          if (
            rabbitPosition[1] > 0 &&
            stones[rabbitPosition[0]][rabbitPosition[1] - 1]
          ) {
            setRabbitPosition([rabbitPosition[0], rabbitPosition[1] - 1]);
            setRabbitDirection("left");
          }
          break;
        case "KeyD":
          if (
            rabbitPosition[1] < 9 &&
            stones[rabbitPosition[0]][rabbitPosition[1] + 1]
          ) {
            setRabbitPosition([rabbitPosition[0], rabbitPosition[1] + 1]);
            setRabbitDirection("right");
          }
          break;
        default:
          throw new Error();
      }
    }
  };

  window.onkeydown = (e) => moveTurtle(e.code);

  const renderTwoPlayerScore = () => {
    return(<div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: "10px",
        fontSize: "30px",
      }}
    >
      <div style={{ margin: "0px 90px 0px 0px" }}>{`${carrotsEaten} 🥕  `}</div>
      <div>{`🍎${applesEaten}`}</div>
    </div>)
  }
  
  return (
    <div style={{ marginTop: "10px" }}>
      {windowWidth ? renderTwoPlayerScore() : <p>{`Apples Eaten: ${applesEaten}`}</p>}
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
