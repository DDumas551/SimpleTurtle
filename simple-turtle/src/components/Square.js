import React, { useEffect } from "react";
import Turtle from "./Turtle";
import Apple from "./Apple";

const Square = ({
  row,
  col,
  turtlePosition,
  direction,
  stone,
  applePosition,
  setApple,
  setApplesEaten,
  applesEaten,
}) => {
  const renderTurtle =
    row === turtlePosition[0] && col === turtlePosition[1] ? true : false;
  const renderApple =
    row === applePosition[0] && col === applePosition[1] ? true : false;

  useEffect(() => {
    if (
      turtlePosition[0] === applePosition[0] &&
      turtlePosition[1] === applePosition[1]
    ) {
      setApple();
      setApplesEaten(applesEaten + 1);
    }
  }, [applePosition, applesEaten, setApple, setApplesEaten, turtlePosition]);

  return (
    <div
      className="square"
      style={{ backgroundColor: stone ? "grey" : "black" }}
    >
      {renderTurtle && <Turtle direction={direction} />}
      {renderApple && <Apple />}
    </div>
  );
};
export default Square;
