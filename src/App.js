import React, { Component } from "react"; //Component, useState
//import logo from "./logo.svg";
import "./App.css";
import "./person/Person.css";
import Person from "./person/Person";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Michael", age: 38 },
      { id: 2, name: "Stephanie", age: 28 }
    ],
    showPersons: false
  };

  switchNameHandler = newName => {
    console.log("Was Clicked!");
    this.setState({
      persons: [
        { id: 1, name: newName, age: 18 },
        { id: 2, name: "Stephanie Girl", age: 28 }
      ]
    });
  };

  nameChangedHandler = (event, id) => {
    const person = {
      ...this.state.persons.filter(p => p.id === id)
    };

    person.name = event.target.value;

    const persons = [...this.state.persions];
    const index = persons.findIndex(p => p.id === id);
    persons[index] = person;

    this.setState({
      persons: persons
    });
  };

  togglePersonsHandler = event => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "2x solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={this.deletePersonHandler.bind(this, index)}
                key={person.id}
                id={person.id}
                changed={event =>
                  this.nameChangedHandler.bind(event, person.id)
                }
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This really works!!!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Names
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
