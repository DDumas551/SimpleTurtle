import React from "react";
import Turtle from "./Turtle";
import Apple from "./Apple";

export default function Square({
  row,
  col,
  turtlePosition,
  direction,
  stone,
  applePosition,
  setApple,
  setApplesEaten,
  applesEaten,
}) {
  const renderTurtle =
    row === turtlePosition[0] && col === turtlePosition[1] ? true : false;
  const renderApple =
    row === applePosition[0] && col === applePosition[1] ? true : false;
  if (
    turtlePosition[0] === applePosition[0] &&
    turtlePosition[1] === applePosition[1]
  ) {
    setApplesEaten(applesEaten + 1);
    setApple();
  }
  return (
    <div
      className="square"
      style={{ backgroundColor: stone ? "grey" : "black" }}
    >
      {renderTurtle && <Turtle direction={direction} />}
      {renderApple && <Apple />}
    </div>
  );
}
