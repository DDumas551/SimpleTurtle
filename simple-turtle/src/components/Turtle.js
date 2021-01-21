import React from "react";

export default function Turtle({ direction }) {
  let turtleDirection;
  switch (direction) {
    case "up":
      turtleDirection = { transform: "rotate(90deg)" };
      break;
    case "down":
      turtleDirection = { transform: "rotate(-90deg)" };
      break;
    case "right":
      turtleDirection = { transform: "scaleX(-1)" };
      break;
    case "left":
      turtleDirection = { transform: "scaleX(1)" };
      break;
    default:
      turtleDirection = { transform: "scaleX(-1)" };
  }
  return (
    <div className="turtle" style={turtleDirection}>
      🐢
    </div>
  );
}
