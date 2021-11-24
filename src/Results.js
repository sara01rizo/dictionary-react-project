import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  // console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        {props.results.meanings.map((meaning, index) => (
          <div key={index}>
            <section>
              <Meaning meaning={meaning} />
            </section>
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
}
