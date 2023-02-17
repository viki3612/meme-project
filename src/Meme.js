import React, { useState } from "react";
import "./Meme.css";

export default function Meme() {
  //let [memeImage, setMemeImage] = useState();
  // function handleSubmit() {
  //api call
  //}
  return (
    <div className="form">
      <div className="input-group">
        <input type="text" className="form-control" />{" "}
        <input type="text" className="form-control" />
      </div>
      <button
        type="submit"
        className="btn btn-primary btn-lg"
        onSubmit={handleSubmit}
      >
        Get a new meme image
      </button>
      //
      <img src={memeImage} className="meme-image" />
    </div>
  );
}
