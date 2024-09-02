import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Review from './Review';
import EligibilitySteps from './EligibilitySteps';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Review" element={<Review />} />
        <Route path="/paywithcircle" element={<EligibilitySteps />} />
      </Routes>
    </div>
  );
}

export default App;