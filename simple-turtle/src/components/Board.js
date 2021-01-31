import React, { useState, useEffect, useContext } from "react";
import Square from "./Square";
import stones from "./Stones";
import { TurtlePositionContext } from "./contexts/TurtlePositionContext";

const Board = ({ direction, setApplesEaten, applesEaten }) => {
  const { turtlePosition } = useContext(TurtlePositionContext);
  const [squares, setSquares] = useState([]);
  const [apple, setApple] = useState([0, 0]);

  const randCoords = (stones) => {
    let boo = true;
    while (boo) {
      let x = Math.floor(Math.random() * 9);
      let y = Math.floor(Math.random() * 9);
      if (stones[x][y]) {
        boo = false;
        setApple([x, y]);
      }
    }
  };

  useEffect(() => {
    setSquares(stones);
    randCoords(stones);
  }, []);

  return (
    <div className="board">
      {squares.map((row, r) => {
        return (
          <div className="row" key={r}>
            {row.map((square, c) => {
              return (
                <Square
                  key={c}
                  row={r}
                  col={c}
                  stone={square}
                  turtlePosition={turtlePosition}
                  applePosition={apple}
                  direction={direction}
                  setSquares={setSquares}
                  setApple={() => randCoords(stones)}
                  setApplesEaten={setApplesEaten}
                  applesEaten={applesEaten}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
