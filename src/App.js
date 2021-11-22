import React from "react";
import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary React Project</h1>
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <a href="#" className="btn btn-primary">
          Hello
        </a>
        <main>
          <Dictionary />
        </main>
        <footer>
          {" "}
          <span>
            This project was coded by{" "}
            <a href="#" target="_blank">
              Sara Pulido
            </a>{" "}
            and is open-sourced on{" "}
            <a href="" target="_blank">
              GitHub
            </a>
          </span>
        </footer>
      </div>
    </div>
  );
}
