import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';


const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/car">Drivers</Link>
        </li>
        <li>
          <Link to="/form-table">Admin</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;








