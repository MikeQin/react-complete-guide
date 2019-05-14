import React from 'react';
import Person from './Person';

const persons = props => props.persons.map((person, index) => {
  return (
    <Person
      name={person.name}
      age={person.age}
      clicked={() => props.clicked(index)}
      key={person.id}
      id={person.id}
      changed={event => props.changed(event, person.id)}
    />
  );
});

export default persons;