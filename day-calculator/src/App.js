import logo from "./logo.svg";
import "./App.css";
import InputForm from "./Components/InputForm";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <InputForm />
      </div>
    );
  }
}

export default App;
