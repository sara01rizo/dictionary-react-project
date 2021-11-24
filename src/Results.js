import React from "react";

export default function Results(props) {
  // console.log(props.results);
  if (props.results === {}) {
    return null;
  } else {
    return <div className="Results">here the Results</div>;
  }
}
