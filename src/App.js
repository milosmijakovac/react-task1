import React, { Component } from "react";
import "./App.css";
import Tooltip from "./components/Tooltip";
import ContentCard from "./components/ContentCard";
import Buttons from "./components/Buttons";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="card">
          <Tooltip />
          <ContentCard />
          <Buttons />
        </div>
      </div>
    );
  }
}

export default App;
