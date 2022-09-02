import React from "react";
import Global from "./styles/Global";
import RoutesApplication from "./routes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Global />
      <RoutesApplication />
    </>
  );
}

export default App;
