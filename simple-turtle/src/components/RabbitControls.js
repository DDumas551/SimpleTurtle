import React, { useContext } from "react";
import stones from "./Stones";
import { AppContext } from "./contexts/AppContext";

const RabbitControls = () => {
  const {
    turtlePosition,
    rabbitPosition,
    setRabbitPosition,
    setRabbitDirection,
    carrotsEaten,
    mobileMode,
    twoPlayers,
  } = useContext(AppContext);
  const moveRabbit = (direction) => {
    const options = {
      KeyW: true,
      KeyA: true,
      KeyS: true,
      KeyD: true,
    };
    if (twoPlayers && options[direction]) {
      switch (direction) {
        case "KeyW":
          if (
            rabbitPosition[0] - 1 === turtlePosition[0] &&
            rabbitPosition[1] === turtlePosition[1]
          ) {
            setRabbitDirection("up");
            break;
          }
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
            rabbitPosition[0] + 1 === turtlePosition[0] &&
            rabbitPosition[1] === turtlePosition[1]
          ) {
            setRabbitDirection("down");
            break;
          }
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
            rabbitPosition[0] === turtlePosition[0] &&
            rabbitPosition[1] - 1 === turtlePosition[1]
          ) {
            setRabbitDirection("left");
            break;
          }
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
            rabbitPosition[0] === turtlePosition[0] &&
            rabbitPosition[1] + 1 === turtlePosition[1]
          ) {
            setRabbitDirection("right");
            break;
          }
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

  //   window.onkeydown = (e) => moveRabbit(e.code);

  // const renderTwoPlayerScore = () => {
  //   return (
  //     <div
  //       style={{
  //         display: "flex",
  //         flexDirection: "row",
  //         justifyContent: "center",
  //         marginBottom: "10px",
  //         fontSize: "30px",
  //       }}
  //     >
  //       <div
  //         style={{ margin: "0px 90px 0px 0px" }}
  //       >{`${carrotsEaten} 🥕  `}</div>
  //       <div>{`🍎${applesEaten}`}</div>
  //     </div>
  //   );
  // };

  const renderOnePlayerScore = () => {
    return <p>{`🥕 Eaten: ${carrotsEaten}`}</p>;
  };

  const renderTwoPlayerMobile = () => {
    if (mobileMode && twoPlayers) {
      return (
        <div className="flip" style={{ marginTop: "10px" }}>
          {renderOnePlayerScore()}
          <div>
            <button onClick={() => moveRabbit("KeyS")}>Up</button>
            <div>
              <button onClick={() => moveRabbit("KeyD")}>Left</button>
              <button onClick={() => moveRabbit("KeyA")}>Right</button>
            </div>
            <button onClick={() => moveRabbit("KeyW")}>Down</button>
          </div>
        </div>
      );
    } else {
      return <h2>Simple Turtle</h2>;
    }
  };

  return <div>{renderTwoPlayerMobile()}</div>;
};

export default RabbitControls;
