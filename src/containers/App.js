import React, { Component } from "react"; //Component, useState
//import logo from "../logo.svg";
import styles from "./App.module.css";
import Cockpit from "../components/cockpit/Cockpit";
import Persons from "../components/person/Persons";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  state = {
    persons: [
      { id: 100, name: "Michael", age: 38 },
      { id: 200, name: "Stephanie", age: 28 },
      { id: 300, name: "Amy", age: 21 }
    ],
    showPersons: false,
    appTitle: this.props.appTitle
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("[App.js] getDerivedStateFromProps", nextProps);
    return prevState;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

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
    console.log("[App.js] render");

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
          appTitle={this.state.appTitle}
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
