import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage'
import CarImage from './components/CarImage';
import FormTable from './components/Admin';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/car">Car Image</Link>
            </li>
            <li>
              <Link to="/FormTable">New Car</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/car" element={<CarImage />} />
          <Route path="/FormTable" element={<FormTable />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
