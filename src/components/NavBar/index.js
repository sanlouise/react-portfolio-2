import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './index.css';

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="navbar-header">
            <NavLink activeClassName="selected" className="nav-link navbar-brand" to="/app">Splash Page</NavLink>
          </div>
          <ul className="nav">
            <NavLink activeClassName="selected" className="nav-link" to="/">Home</NavLink>
            <NavLink activeClassName="selected" className="nav-link" to="/about">About</NavLink>
            <NavLink activeClassName="selected" className="nav-link" to="/portfolio">Portfolio</NavLink>
          </ul>
        </nav>

        <div className="page-content">
          {this.props.children}
        </div>

      </div>
    );
  }
}

export default NavBar;
