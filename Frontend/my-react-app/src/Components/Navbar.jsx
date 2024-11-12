// Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Optional for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">MyApp</h1>
      <ul className="nav-links">
        <li>
          <NavLink to="/" activeClassName="active" exact>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">About</NavLink>
        </li>
        <li>
          <NavLink to="/services" activeClassName="active">Services</NavLink>
        </li>
        <li>
          <NavLink to="/ecommerce" activeClassName="active">Ecommerce</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
