import React, { useState, useEffect, useContext } from "react";
import Square from "./Square";
import stones from "./Stones";
import { AppContext } from "./contexts/AppContext";

const Board = () => {
  const { squares, setSquares } = useContext(AppContext);
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
  }, [setSquares]);

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
                  applePosition={apple}
                  setApple={() => randCoords(stones)}
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
