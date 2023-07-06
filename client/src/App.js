import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage'
import CarImage from './components/CarImage';
import NavBar from './components/NavBar';
import FormTable from './components/Admin';

import './App.css';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/car" element={<CarImage />} />
          <Route path="/form-table" element={<FormTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
