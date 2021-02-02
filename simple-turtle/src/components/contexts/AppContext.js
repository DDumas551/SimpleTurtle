import React, { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider(props) {
  const [turtlePosition, setTurtlePosition] = useState([0, 0]);
  const [rabbitPosition, setRabbitPosition] = useState([9, 9]);
  const [direction, setDirection] = useState("right");
  const [rabbitDirection, setRabbitDirection] = useState("left");
  const [squares, setSquares] = useState([]);
  const [applesEaten, setApplesEaten] = useState(0);
  const [carrotsEaten, setCarrotsEaten] = useState(0);
  const windowWidth = window.parent.innerWidth > 800 ? true : false;

  return (
    <AppContext.Provider
      value={{
        turtlePosition,
        setTurtlePosition,
        rabbitPosition,
        setRabbitPosition,
        direction,
        setDirection,
        rabbitDirection,
        setRabbitDirection,
        squares,
        setSquares,
        applesEaten,
        setApplesEaten,
        carrotsEaten,
        setCarrotsEaten,
        windowWidth
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
