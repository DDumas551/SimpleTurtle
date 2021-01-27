import React from "react";
import Turtle from "./Turtle";

export default function Square({ row, col, turtlePosition, direction, stone }) {
  const renderTurtle =
    row === turtlePosition[0] && col === turtlePosition[1] ? true : false;

  return (
    <div
      className="square"
      style={{ backgroundColor: stone ? "grey" : "black" }}
    >
      {renderTurtle && <Turtle direction={direction} />}
    </div>
  );
}
