import React, { useEffect } from "react";
import cockpitStyles from "./Cockpit.module.css";

const Cockpit = props => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    setTimeout(() => {
      alert("Saved data to cloud!");
    }, 1000);

    return () => {
      console.log("[Cockpit.js] cleanup work runs in useEffect");
    };
  }, [props.persons]);

  let btnClass = "";
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

  console.log(classes.join(" "));

  return (
    <div className={cockpitStyles.Cockpit}>
      <h1>{props.appTitle}</h1>
      <p className={classes.join(" ")}>This really works!!!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Names
      </button>
    </div>
  );
};

// Performance optimization: React.memo()
export default React.memo(Cockpit);
