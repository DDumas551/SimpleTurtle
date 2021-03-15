import React, { useContext, useState } from "react";
import stones from "./Stones";
import { AppContext } from "./contexts/AppContext";

const Controls = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    turtlePosition,
    rabbitPosition,
    // setRabbitPosition,
    setTurtlePosition,
    setDirection,
    // setRabbitDirection,
    applesEaten,
    twoPlayers,
    setTwoPlayers,
    mobileMode,
    setMobileMode,
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
            turtlePosition[0] - 1 === rabbitPosition[0] &&
            turtlePosition[1] === rabbitPosition[1]
          ) {
            setDirection("up");
            break;
          }
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
            turtlePosition[0] + 1 === rabbitPosition[0] &&
            turtlePosition[1] === rabbitPosition[1]
          ) {
            setDirection("down");
            break;
          }
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
            turtlePosition[0] === rabbitPosition[0] &&
            turtlePosition[1] - 1 === rabbitPosition[1]
          ) {
            setDirection("left");
            break;
          }
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
            turtlePosition[0] === rabbitPosition[0] &&
            turtlePosition[1] + 1 === rabbitPosition[1]
          ) {
            setDirection("right");
            break;
          }
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
    return <p>{`🍎 Eaten: ${applesEaten}`}</p>;
  };

  const renderButtons = () => {
    return (
      <div>
        <button onClick={() => moveTurtle("ArrowUp")}>Up</button>
        <div>
          <button onClick={() => moveTurtle("ArrowLeft")}>Left</button>
          <button onClick={() => moveTurtle("ArrowRight")}>Right</button>
        </div>
        <button onClick={() => moveTurtle("ArrowDown")}>Down</button>
      </div>
    );
  };

  const toggleModal = (e) => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div style={{ marginTop: "10px" }}>
      {renderOnePlayerScore()}
      {renderButtons()}
      <div
        className="settings"
        onClick={() => toggleModal()}
        style={{
          float: "right",
          fontSize: "20px",
          userSelect: "none",
          cursor: "pointer",
        }}
      >
        ⚙️
      </div>
      <div
        className="modal"
        style={{ display: isModalOpen ? "block" : "none" }}
      >
        <div className="modal-content">
          <button onClick={() => setTwoPlayers(!twoPlayers)}>{`${
            twoPlayers ? "Two Players" : "One Player"
          }`}</button>
          <button onClick={() => setMobileMode(!mobileMode)}>{`${
            mobileMode ? "Mobile" : "Desktop"
          }`}</button>
        </div>
        <button onClick={() => toggleModal()}>X</button>
      </div>
    </div>
  );
};

export default Controls;
