import React, { useState } from "react";
import Square from "./Square";

const Board = ({ turtlePosition, direction }) => {
  const [squares, setSquares] = useState(
    new Array(10).fill(new Array(10).fill(false))
  );

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
                  data={square}
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
