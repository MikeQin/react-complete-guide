import React, { Component } from "react"; //Component, useState
//import logo from "./logo.svg";
import "./App.css";
import Person from "./person/Person";

class App extends Component {
  state = {
    person: [{ name: "Michael", age: 38 }, { name: "Stephanie", age: 28 }]
  };

  switchNameHandler = () => {
    console.log("Was Clicked!");
    this.setState({
      person: [{ name: "Mike", age: 18 }, { name: "Stephanie Girl", age: 28 }]
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}>
          My Hobbie: Dancing
        </Person>
        <Person
          name={this.state.person[1].name}
          age={this.state.person[1].age}
        />
      </div>
    );
  }
}

// const App = props => {
//   const [personsState, setPersonsState] = useState({
//     person: [{ name: "Michael", age: 38 }, { name: "Stephanie", age: 28 }]
//   });

//   const switchNameHandler = () => {
//     console.log("Was Clicked!");
//     setPersonsState({
//       person: [{ name: "Mike", age: 18 }, { name: "Stephanie Girl", age: 18 }]
//     });
//   };

//   return (
//     <div className="App">
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person
//         name={personsState.person[0].name}
//         age={personsState.person[0].age}
//       >
//         My Hobbie: Dancing
//       </Person>
//       <Person
//         name={personsState.person[1].name}
//         age={personsState.person[1].age}
//       />
//     </div>
//   );
// };

export default App;
