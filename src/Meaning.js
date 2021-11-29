import React from "react";
import Synonyms from "./Synonyms";


export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="Definition">{definition.definition}</p>
            <br />
            <p className="Definition__example">{definition.example}</p>
            <Synonyms synosyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
