import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmbulance, faAnchor } from "@fortawesome/free-solid-svg-icons";

class UserProfile extends React.Component {
  render() {
    return (
      <div>
        <h4>
          <FontAwesomeIcon icon={faAmbulance} color="green" /> Ambulance Icon
        </h4>
        <h4>
          <FontAwesomeIcon icon={faAnchor} color="yellow" /> Anchor Icon
        </h4>
      </div>
    );
  }
}

export default UserProfile;
