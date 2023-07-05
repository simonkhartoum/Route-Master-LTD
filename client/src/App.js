import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage'
import CarImage from './components/CarImage';
import CarFormTable from './components/CarFormTable';
import NavBar from './components/NavBar';
import FormTable from './components/Admin';
function App  ()  {
  return (
  <div>
  <BrowserRouter>
  <NavBar />
  <Routes>
  <Route path="/" element={<HomePage />}></Route>
  <Route path="/car" element={<CarImage />}></Route>
  <Route path="/form-table" element={<CarFormTable />}></Route>
  </Routes>
  </BrowserRouter>
  </div>
  );
};

export default App;
