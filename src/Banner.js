import React from "react";
import "./Banner.css";
import troll from "./troll-image.png";

export default function Banner() {
  return (
    <div className="Banner-logo">
      <h2 className="banner-title">
        {" "}
        <img src={troll} className="banner-image" alt="meme"></img> Meme
        Generator{" "}
      </h2>
    </div>
  );
}
