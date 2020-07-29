import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <nav>
        <Link to="/"> Exercise Tracker</Link>
        <Link to="/create">Create Exercise</Link>
        <Link to="/user"> Create User</Link>
      </nav>
    );
  }
}
