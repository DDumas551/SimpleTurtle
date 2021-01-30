import React, { useState, useEffect } from "react";
import Square from "./Square";
import stones from "./Stones";

const Board = ({ turtlePosition, direction }) => {
  const [squares, setSquares] = useState(
    new Array(1).fill(new Array(10).fill(new Array(10)))
  );
  useEffect(() => {
    setSquares(stones);
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
                  direction={direction}
                  setSquares={setSquares}
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
