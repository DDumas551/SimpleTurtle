import React, { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider(props) {
  const [turtlePosition, setTurtlePosition] = useState([0, 0]);
  const [direction, setDirection] = useState("right");
  const [squares, setSquares] = useState([]);
  const [applesEaten, setApplesEaten] = useState(0);

  return (
    <AppContext.Provider
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
    </AppContext.Provider>
  );
}
