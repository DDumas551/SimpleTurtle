import React from "react";

export default function Rabbit({ direction }) {
  let rabbitDirection;
  switch (direction) {
    case "up":
      rabbitDirection = { transform: "rotate(90deg)" };
      break;
    case "down":
      rabbitDirection = { transform: "rotate(-90deg)" };
      break;
    case "right":
      rabbitDirection = { transform: "scaleX(-1)" };
      break;
    case "left":
      rabbitDirection = { transform: "scaleX(1)" };
      break;
    default:
      rabbitDirection = { transform: "scaleX(-1)" };
  }
  return (
    <div className="rabbit" style={rabbitDirection}>
      🐇
    </div>
  );
}
