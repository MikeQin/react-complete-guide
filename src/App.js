import React, { Component } from "react"; //Component, useState
//import logo from "./logo.svg";
import styles from "./App.module.css";
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
    let persons = null;
    let btnClass = '';
    
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
                  this.nameChangedHandler(event, person.id)
                }
              />
            );
          })}
        </div>
      );

      btnClass = styles.Red;
    }

    const classes = [];
    if (this.state.persons.length <= 1) {
      classes.push(styles.fontRed);
    }

    if (this.state.persons.length === 0) {
      classes.push(styles.fontBold);
    }

    console.log(classes.join(' '));

    return (
      <div className={styles.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This really works!!!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Names
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
