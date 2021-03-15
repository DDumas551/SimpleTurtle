import React, { useState, useEffect, useContext } from "react";
import Square from "./Square";
import stones from "./Stones";
import { AppContext } from "./contexts/AppContext";

const Board = () => {
  const { squares, setSquares, gameSize } = useContext(AppContext);
  const [apple, setApple] = useState([0, 0]);
  const [carrot, setCarrot] = useState([0, 0]);

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

  const randCoordsRabbit = (stones) => {
    let foo = true;
    while (foo) {
      let x = Math.floor(Math.random() * 9);
      let y = Math.floor(Math.random() * 9);
      if (stones[x][y]) {
        foo = false;
        setCarrot([x, y]);
      }
    }
  };

  useEffect(() => {
    setSquares(stones);
    randCoords(stones);
    randCoordsRabbit(stones);
  }, [setSquares]);

  return (
    <div>
      <div className={`board ${gameSize === "small" ? "small" : "medium"}`}>
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
                    carrotPosition={carrot}
                    setCarrot={() => randCoordsRabbit(stones)}
                    setApple={() => randCoords(stones)}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Board;
