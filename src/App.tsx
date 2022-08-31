import React from "react";
import RoutesMain from "./Routes";
import Global from "./styles/Global";
import "./App.css";
import RoutesApplication from "./routes";

function App() {
  return (
    <>
      <Global />
      <RoutesApplication />
    </>
  );
}

export default App;
