import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">WatchLists</Link>
          </div>
          <div className="nav-links">
            <NavLink to="/">Watch List</NavLink>
            <NavLink to="/watched">Watched</NavLink>
            <NavLink to="/add" className="btn">
              + Add
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
