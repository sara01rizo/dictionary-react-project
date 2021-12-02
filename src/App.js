import React from "react";
import logo from "./images/logo.jpg";
import "./App.css";
import Dictionary from "./Dictionary";
import Spinner from "./Spinner";
import swal from "sweetalert2";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserProfile from "./UserProfile";

export default function App() {
  const showAlert = () => {
    new swal({
      title: "Absolutly",
      text: "You will be lucky all week long! 💚",
      icon: "success",
      button: "Agree",
      timer: "5000",
    });
  };

  return (
    <div className="App">
      <div className="container">
        <br />
        <div className="row">
          <div className="center__btn">
            <button
              className="mx-auto d-block btn__alert"
              onClick={() => showAlert()}
            >
              🍀Will I get lucky today?
            </button>
          </div>
        </div>
        <h1>Dictionary React Project</h1>
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <UserProfile />
          <Spinner />
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
              GitHub{" "}
            </a>
            hosted on{" "}
            <a
              href="https://determined-aryabhata-ee710f.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </span>
        </footer>
      </div>
    </div>
  );
}
