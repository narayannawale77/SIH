
import './App.css';
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Team from './components/Team';
import Slide1 from './pages/Slide1';



function App() {
  return (
    <div className="App">
      <Header/>
      <Team/>
      <Slide1/>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        
      </Routes>
    </div>
  );
}

export default App;
