import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import EditExercise from "./components/edit-exercise.component";
import ExercisesList from "./components/exercises-list.component";
import NavBar from "./components/navbar.component";

function App() {
  return (
    <Router>
      <NavBar />
      <Route path="/create" component={CreateExercise} />
      {/* loads component depending on path */}
      {/* <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
 
      <Route path="/user" component={CreateUser} /> */}
    </Router>
  );
}

export default App;
