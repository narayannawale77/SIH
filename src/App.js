import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Team from './components/Team';
import Slide1 from './pages/Slide1';
import Slide2 from './pages/Slide2';
import Slide3 from './pages/Slide3';
import Slide4 from './pages/Slide4';
import Slide5 from './pages/Slide5';

function App() {
  return (
    <div className="App">
      <Header />
      <Team />
      
      <Routes>
        <Route path="/slide1" element={<Slide1 />} />
        <Route path="/slide2" element={<Slide2 />} />
        <Route path="/slide3" element={<Slide3 />} />
        <Route path="/slide4" element={<Slide4 />} />
        <Route path="/slide5" element={<Slide5 />} />
        {/* You can add a default route or a homepage route if needed */}
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </div>
  );
}

export default App;
