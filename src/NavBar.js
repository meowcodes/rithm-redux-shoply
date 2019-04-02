import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav className="NavBar">
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to="/cart">Cart</NavLink>
      </nav>
    );
  }
}

export default NavBar;