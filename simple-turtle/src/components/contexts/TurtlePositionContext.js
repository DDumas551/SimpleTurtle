import React, { createContext, useState } from "react";

export const TurtlePositionContext = createContext();

export function TurtlePositionProvider(props) {
  const [turtlePosition, setTurtlePosition] = useState([0, 0]);
  return (
    <TurtlePositionContext.Provider
      value={{ turtlePosition, setTurtlePosition }}
    >
      {props.children}
    </TurtlePositionContext.Provider>
  );
}
