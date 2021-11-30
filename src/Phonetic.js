import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default function Phonetic(props) {
  //console.log(props.phonetic);
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen <FontAwesomeIcon icon={faCoffee} />
      </a>
      <br />
      {props.phonetic.text}
    </div>
  );
}
