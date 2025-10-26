import React from "react";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/Hero/Hero";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import About from "./components/About/About";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title
          subtitle="Our Programs"
          title="What We Offer"
        />
        <Programs />
        <About />
        <Title
          subtitle="Gallery"
          title="Campus Photos"
        />
      </div>
    </div>
  );
}

export default App;
