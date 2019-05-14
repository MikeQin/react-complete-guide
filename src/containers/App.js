import React, { Component } from "react"; //Component, useState
//import logo from "../logo.svg";
import styles from "./App.module.css";
import Cockpit from "../components/cockpit/Cockpit";
import Persons from "../components/person/Persons";

class App extends Component {
  state = {
    persons: [
      { id: 100, name: "Michael", age: 38 },
      { id: 200, name: "Stephanie", age: 28 },
      { id: 300, name: "Amy", age: 21 }
    ],
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    // copy array
    const persons = [...this.state.persons];
    // update person    
    const index = persons.findIndex(p => p.id === id);
    const person = {
      ...persons[index]
    };
    person.name = event.target.value;
    // replace person in array
    persons[index] = person;

    this.setState({
      persons: persons
    });
  };

  togglePersonsHandler = () => {
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

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={styles.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={() => this.togglePersonsHandler()}
        />
        {persons}
      </div>
    );
  }
}

export default App;
