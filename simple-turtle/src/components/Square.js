import React, { useEffect, useContext } from "react";
import Turtle from "./Turtle";
import Apple from "./Apple";
import { TurtlePositionContext } from "./contexts/AppContext";

export default function Square({
  row,
  col,
  stone,
  applePosition,
  setApple,
}) {
  const { turtlePosition, direction, applesEaten, setApplesEaten } = useContext(TurtlePositionContext);
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
}
