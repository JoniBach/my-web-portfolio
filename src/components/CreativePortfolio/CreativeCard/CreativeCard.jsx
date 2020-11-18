/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import React from "react";
import "./CreativeDashboard.css";
import image from "../DemoSiteImages/selina01.jpg";

export default function CreativeCard(props) {
  console.log(props.position[1]);
  const top = `${props.position[1]}%`;
  const left = `${props.position[0]}%`;
  return (
    <div className="container">
      <img src={props.image} alt="image" />
      <h2
        style={{
          top: top,
          left: left,
          color: props.color ? props.color : 'white',
          width: props.width ? props.width : 250,
          textAlign: props.textAlign ? props.textAlign : 'left',
        }}
      >
        {props.text}
        <br />
        {props.button ? (
          <button>{props.buttonText ? props.buttonText : "Learn More"}</button>
        ) : (
          <div />
        )}
      </h2>
    </div>
  );
}
