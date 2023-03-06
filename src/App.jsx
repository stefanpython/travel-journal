import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Data from "./Data";

function App() {
  const cardData = Data.map((item) => (
    <Card
      title={item.title}
      location={item.location}
      googleMapsUrl={item.googleMapsUrl}
      startDate={item.startDate}
      endDate={item.endDate}
      description={item.description}
      imageUrl={item.imageUrl}
    />
  ));

  return (
    <div className="app--container">
      <Navbar />
      {cardData}
    </div>
  );
}

export default App;
