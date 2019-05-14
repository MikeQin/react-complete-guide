import React from 'react';
import cockpitStyles from './Cockpit.module.css'

const cockpit = (props) => {

  let btnClass = '';
  if (props.showPersons) {
    btnClass = cockpitStyles.Red;
  }

  const classes = [];
  if (props.persons.length <= 1) {
    classes.push(cockpitStyles.FontRed);
  }

  if (props.persons.length === 0) {
    classes.push(cockpitStyles.FontBold);
  }

  console.log(classes.join(' '));

  return (
    <div className={cockpitStyles.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={classes.join(' ')}>This really works!!!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Names
      </button>
    </div>
  );
};

export default cockpit;