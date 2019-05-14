import React, { Component, Fragment } from "react";
//import styles from "./Person.module.css";

class Person extends Component {
  componentWillUnmount() {
    console.log("[Person.js] componentWillUnmount");
  }

  render() {
    console.log("[Person.js] rendering ...");
    return (
      <Fragment>
        <p>id: {this.props.id}</p>
        <p onClick={this.props.clicked}>
          I'm {this.props.name}, and I am {this.props.age} years old.
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Fragment>
    );
  }
}

export default Person;
