import React from "react";
import logo from "./logo.jpg";
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
        Hello
        <main>
          <Dictionary />
        </main>
        <footer>
          {" "}
          <span>
            This project was coded by{" "}
            <a
              href="https://www.linkedin.com/in/sara-andrea-pulido-buenrostro-750b181b3/"
              target="_blank"
              rel="noreferrer"
            >
              Sara Pulido
            </a>{" "}
            and is open-sourced on{" "}
            <a
              href="https://github.com/sara01rizo/dictionary-react-project"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </span>
        </footer>
      </div>
    </div>
  );
}
