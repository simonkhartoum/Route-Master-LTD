import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';
import { Button } from "../styles";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE", credentials: "include" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div className='navv'>
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
          <li className="logout-button">
            <Button variant="outline" onClick={handleLogoutClick}>Logout</Button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
