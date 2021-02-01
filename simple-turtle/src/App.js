import React from "react";
import Board from "./components/Board";
import Controls from "./components/Controls";
import "./App.css";
import { AppProvider } from "./components/contexts/AppContext";

function App() {
  return (
    <div className="App">
      <h1>Simple Turtle</h1>
      <AppProvider>
        <Board />
        <Controls />
      </AppProvider>
    </div>
  );
}

export default App;
