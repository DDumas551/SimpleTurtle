import React from "react";
import Board from "./components/Board";
import Controls from "./components/Controls";
import "./App.css";
import { AppProvider } from "./components/contexts/AppContext";
import RabbitControls from "./components/RabbitControls";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <RabbitControls />
        {/* <h1 className="flip">Simple Turtle</h1> */}
        <Board />
        {/* <h1>Simple Turtle</h1> */}
        <Controls />
      </AppProvider>
    </div>
  );
}

export default App;
