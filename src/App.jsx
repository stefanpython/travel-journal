import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  return (
    <div className="app--container">
      <Navbar />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
