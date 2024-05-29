import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.baslik}</h1>
      <p>{props.noted}</p>
    </div>
  );
}

export default Note;
