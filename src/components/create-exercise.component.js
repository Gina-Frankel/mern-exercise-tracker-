import React, { Component } from "react";

export default class CreateExercises extends Component {
  constructor(props) {
    //need to always call super when defining the super of a subclass
    super(props);
    //set orginal state
    //need a property that corresponds to field of mongo db document
    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: [],
    };
  }
  //will automatically be called before anything loads
  componentDidMount() {
    this.setState({
      users: ["test user"],
      username: "test user",
    });
  }

  //text box where someone enters the user name
  // target = text box
  // value = what is entered
  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  onChangeDescription = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  onChangeDuration = (e) => {
    this.setState({
      duration: e.target.value,
    });
  };

  //when someone clicks submit button -
  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };

    console.log(exercise);
    // after submitting,  go back to homepage
    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Create New Exercise Log</h3>
        {/* when click button call this.onSubmit */}
        <form onSubmit={this.onSubmit}>
          <label>Username: </label>
          <select
            ref="userInput"
            required
            value={this.state.username}
            //when change selection
            onChange={this.onChangeUsername}
            // {
            //   this.state.users.map(function(user){
            //     return <option
            //     key={user}
            //     value={user}>{user}
            //   })
            // }
          ></select>
        </form>
      </div>
    );
  }
}
