import React, { useEffect, useContext } from "react";
import Turtle from "./Turtle";
import Rabbit from "./Rabbit";
import Apple from "./Apple";
import Carrot from "./Carrot";
import { AppContext } from "./contexts/AppContext";

export default function Square({
  row,
  col,
  stone,
  applePosition,
  setApple,
  carrotPosition,
  setCarrot,
}) {
  const {
    turtlePosition,
    direction,
    rabbitPosition,
    applesEaten,
    setApplesEaten,
    carrotsEaten,
    setCarrotsEaten,
    rabbitDirection,
    windowWidth,
  } = useContext(AppContext);
  const renderTurtle =
    row === turtlePosition[0] && col === turtlePosition[1] ? true : false;
  const renderApple =
    row === applePosition[0] && col === applePosition[1] ? true : false;
  const renderRabbit =
    row === rabbitPosition[0] && col === rabbitPosition[1] ? true : false;
  const renderCarrot =
    row === carrotPosition[0] && col === carrotPosition[1] ? true : false;

  useEffect(() => {
    if (
      turtlePosition[0] === applePosition[0] &&
      turtlePosition[1] === applePosition[1]
    ) {
      setApple();
      setApplesEaten(applesEaten + 1);
    }
  }, [applePosition, applesEaten, setApple, setApplesEaten, turtlePosition]);

  useEffect(() => {
    if (
      rabbitPosition[0] === carrotPosition[0] &&
      rabbitPosition[1] === carrotPosition[1]
    ) {
      setCarrot();
      setCarrotsEaten(carrotsEaten + 1);
    }
  }, [
    carrotPosition,
    carrotsEaten,
    setCarrot,
    setCarrotsEaten,
    rabbitPosition,
  ]);

  return (
    <div
      className="square"
      style={{ backgroundColor: stone ? "grey" : "black" }}
    >
      {renderTurtle && <Turtle direction={direction} />}
      {renderApple && <Apple />}
      {windowWidth && renderRabbit && <Rabbit direction={rabbitDirection} />}
      {windowWidth && renderCarrot && <Carrot />}
    </div>
  );
}
