import React, { createContext, useState } from "react";

export const TurtlePositionContext = createContext();

export function TurtlePositionProvider(props) {
  const [turtlePosition, setTurtlePosition] = useState([0, 0]);
  const [direction, setDirection] = useState("right");
  const [squares, setSquares] = useState([]);
  const [applesEaten, setApplesEaten] = useState(0);

  return (
    <TurtlePositionContext.Provider
      value={{
        turtlePosition,
        setTurtlePosition,
        direction,
        setDirection,
        squares,
        setSquares,
        applesEaten,
        setApplesEaten,
      }}
    >
      {props.children}
    </TurtlePositionContext.Provider>
  );
}
