import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p className="Definition">{props.meaning.definition[0].definition}</p>
      <p className="Definition__example">
        {props.meaning.definition[0].example}
      </p>
    </div>
  );
}
