import { useState } from "react";
import GridLights from "./components/GridLights";
import "./App.css";

function App() {
  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  return (
    <>
      <GridLights config={config}/>
    </>
  );
}

export default App;
