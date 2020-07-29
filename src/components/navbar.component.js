import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          {" "}
          Exercise Tracker
        </Link>

        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/create">Create Exercise</Link>
          </li>
          <li className="nav-item active">
            <Link to="/user"> Create User</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
