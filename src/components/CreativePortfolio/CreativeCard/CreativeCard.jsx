/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import React, { useState } from "react";
import "./CreativeDashboard.css";

export const MediaCard = (props) => {
  console.log(props);
  return (
    <div
      // href={props.link}
      className="card"
      // onclick="window.open('newurl.html','mywindow');"
      style={{ backgroundImage: `url(${props.image})` }}
    />
  );
};

export const CardCollection = (props) => {
  return <div className="card-container">{props.children}</div>;
};

export default function CreativeCard(props) {
  const top = `${props.position[1]}%`;
  const left = `${props.position[0]}%`;
  const [flip, setFlip] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // TODO: map this over and write it to a new modal
  console.log(props);

  if (flip) {
    return (
      <>
        <div
          style={{ position: "relative", width: "100%" }}
          onClick={() => setShowModal(true)}
        >
          <div style={{ backgroundImage: `url(${props.image})` }}>
            {props.children}
          </div>
          <button className="icon-button" onClick={() => setFlip(false)}>
            X
          </button>
        </div>
        {showModal ? (
          <div className="modal-container">
            <button
              className="icon-button"
              onClick={() => setShowModal(false)}
              style={{
                position: "fixed",
                top: "5%",
              }}
            >
              X
            </button>
            {props.children.props.children.map((d, i) =>
              d.props.type === "iframe" ? (
                <iframe
                  className="modal-content"
                  height="100%"
                  width="100%"
                  src={`https://www.youtube.com/embed/${d.props.embedCode}`}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              ) : (
                <img src={d.props.image} className="modal-content" />
              )
            )}
          </div>
        ) : (
          <div />
        )}
      </>
    );
  } else {
    return (
      <div className="container">
        <img src={props.image} alt="background image" />
        <h2
          style={{
            top: top,
            left: left,
            color: props.color ? props.color : "white",
            width: props.width ? props.width : 250,
            textAlign: props.textAlign ? props.textAlign : "left",
          }}
        >
          {props.text}
          <br />
          {props.button ? (
            <button onClick={() => setFlip(true)}>
              {props.buttonText ? props.buttonText : "Learn More"}
            </button>
          ) : (
            <div />
          )}
        </h2>
      </div>
    );
  }
}
