import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage'
import CarImage from './components/CarImage';
import NavBar from './components/NavBar';
import FormTable from './components/Admin';
import './App.css';
import Login from "./components/Login";

function App  ()  {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;
  return (
  <div>
  <BrowserRouter>
  <NavBar user={user} setUser={setUser} />
  <Routes>
  <Route path="/" element={<HomePage user={user} />}></Route>
  <Route path="/car" element={<CarImage />}></Route>
  <Route path="/form-table" element={<FormTable />}></Route>
  </Routes>
  </BrowserRouter>
  </div>

  );
};

export default App;
