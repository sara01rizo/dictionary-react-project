import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          {props.results.phonetics.map((phonetic, index) => (
            <div key={index}>
              <Phonetic phonetic={phonetic} />
            </div>
          ))}
        </section>
        {props.results.meanings.map((meaning, index) => (
          <div key={index}>
            <section>
              <Meaning meaning={meaning} />
            </section>{" "}
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
}
