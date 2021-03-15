import React, { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider(props) {
  const [turtlePosition, setTurtlePosition] = useState([9, 9]);
  const [rabbitPosition, setRabbitPosition] = useState([0, 0]);
  const [direction, setDirection] = useState("right");
  const [rabbitDirection, setRabbitDirection] = useState("left");
  const [squares, setSquares] = useState([]);
  const [applesEaten, setApplesEaten] = useState(0);
  const [carrotsEaten, setCarrotsEaten] = useState(0);
  const [gameSize, setGameSize] = useState("medium");
  const [twoPlayers, setTwoPlayers] = useState(false);
  const [mobileMode, setMobileMode] = useState(true);

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
        gameSize,
        setGameSize,
        twoPlayers,
        setTwoPlayers,
        mobileMode,
        setMobileMode,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
