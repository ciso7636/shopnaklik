import React, { Component } from "react";
import ReactDOM from "react-dom";
import 'semantic-ui-css/semantic.min.css';
import Dashboard from "./Dashboard/Dashboard";

class App extends Component {

  render() {
    return (
        <Dashboard/>
    )
  }
}

// Put the thing into the DOM!
ReactDOM.render(<App />, document.getElementById("root"));


export default App;
