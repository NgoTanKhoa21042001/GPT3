import React from "react";
import { Blog, Footer, Header, Possibility, WhatGPT3 } from "./container";
import { Brand, CTA, Navbar, Feature } from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Feature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
