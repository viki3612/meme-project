import React from "react";
import "./Meme.css";

export default function Meme() {
  return (
    <form className="form">
      <div className="input-group">
        <input type="text" className="form-control" />{" "}
        <input type="text" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary btn-lg">
        Get a new meme image
      </button>
    </form>
  );
}
