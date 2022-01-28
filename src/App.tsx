import React from "react";
import "./App.css";
import { TopBar } from "./components/TopBar/TopBar";
import { SearchBar } from "./components/SearchBar/SearchBar";

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="App-header">
        <p className="hey-message">Hey, you</p>
        <a className="lets-count-message">Let's count some calories</a>
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
