import React from "react";
import "./Icons.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faAnchor } from "@fortawesome/free-solid-svg-icons";

class UserProfile extends React.Component {
  render() {
    return (
      <div className="Icons">
        <span>
          <FontAwesomeIcon icon={<i class="fab fa-github"></i>} color="green" />{" "}
          GitHub 
        </span>
        <span>
          <FontAwesomeIcon icon={faAnchor} color="green" /> Linkedin
        </span>
      </div>
    );
  }
}

export default UserProfile;
