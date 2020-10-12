import React, { Component } from "react";
import Hello from "./components/Hello";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Hello name={"최영욱님"} />
      <Button bcolor="blue" />
      <Button bcolor="green" />
      <Button />
    </div>
  );
}

export default App;
