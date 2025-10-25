import React from "react";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Programs />
      </div>
    </div>
  );
}

export default App;
