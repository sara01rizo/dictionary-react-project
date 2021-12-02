import React from "react";
import "./Icons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnchor } from "@fortawesome/free-solid-svg-icons";
import "./UserProfile.css";

class UserProfile extends React.Component {
  render() {
    return (
      <div className="Icons">
        <span>
          Open-source{" "}
          <a
            href="https://github.com/sara01rizo/dictionary-react-project"
            target="_blank"
            rel="noreferrer"
          >
            GitHub{" "}
          </a>{" "}
        </span>
        <span>
          <FontAwesomeIcon icon={faAnchor} color="green" /> Visit my{" "}
          <a
            href="https://www.linkedin.com/in/sara-andrea-pulido-buenrostro-750b181b3/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>{" "}
        </span>
      </div>
    );
  }
}

export default UserProfile;
