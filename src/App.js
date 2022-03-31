import React from "react";
import Navbar from "./components/Navbar/Navbar";

import Home from "./components/Pages/Home";
const App = () => {
  return (
    <>
      <div style={{ padding: "0rem 3rem" }}>
        <Navbar />
        <Home />
      </div>
    </>
  );
};

export default App;
