/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import React from "react";
import "./ButterflyHalo.scss";
import Clip from "../../CreativePortfolio/DemoSiteImages/Butterfly.png";
// import Clip from "../../../ButterflyRewind.mp4";
import NavBar from "../../NavBar/NavBar";
import PixelOverlay from "../../../PixelOverlayS.png";
import Gif1 from './AnimatedWebHaloV1.gif'

export default function ButterflyHalo() {
  const title1 = "Artsy Tech Stuff";
  const title2 = "Creative Practitioner";
  return (
    <div >

      {/* <video autoPlay loop muted>
        <source src={Clip} type="video/mp4" />
      </video> */}
      {/* <img className="video" src={Gif1} /> */}
      {/* <div className="video" style={{backgroundImage: `url(${Gif1})`}} /> */}

      <div className="content">
        <svg viewBox="0 0 220 120">
          <defs>
            <linearGradient
              id="rainbow"
              x1="0"
              x2="0"
              y1="0"
              y2="75%"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#00f2ff" offset="0%" />
              <stop stop-color="#e2fbff" offset="50%" />
              <stop stop-color="#0a343f" offset="51%" />
              <stop stop-color="#0094f7" offset="100%" />
              0%,# 50%,# 51%,# 100%
            </linearGradient>
            <filter id="f1" x="0" y="0" width="200%" height="200%">
              <feGaussianBlur
                result="blurOut"
                in="matrixOut"
                stdDeviation="0.5"
              ></feGaussianBlur>
            </filter>
          </defs>
          <text filter="url(#f1)" fill="magenta">
            <tspan
              font-size="15"
              x="50.2%"
              y="20.2%"
              dominant-baseline="middle"
              text-anchor="middle"
            >
              THE
            </tspan>
          </text>
          <text filter="url(#f1)" fill="blue">
            <tspan
              font-size="15"
              x="49.8%"
              y="19.8%"
              dominant-baseline="middle"
              text-anchor="middle"
            >
              THE
            </tspan>
          </text>
          <text fill="url(#rainbow)">
            <tspan
              font-size="15"
              x="50%"
              y="20%"
              dominant-baseline="middle"
              text-anchor="middle"
            >
              THE
            </tspan>
          </text>
          <text filter="url(#f1)" fill="magenta">
            <tspan
              font-size="28"
              x="50.2%"
              y="40.2%"
              dominant-baseline="middle"
              text-anchor="middle"
            >
              {title1}
            </tspan>
          </text>
          <text filter="url(#f1)" fill="blue">
            <tspan
              font-size="28"
              x="49.8%"
              y="39.8%"
              dominant-baseline="middle"
              text-anchor="middle"
            >
              {title1}
            </tspan>
          </text>
          <text fill="url(#rainbow)">
            <tspan
              font-size="28"
              x="50%"
              y="40%"
              dominant-baseline="middle"
              text-anchor="middle"
            >
              {title1}
            </tspan>
          </text>
          <text filter="url(#f1)" fill="magenta">
            <tspan
              font-size="15"
              x="50.2%"
              y="60.2%"
              dominant-baseline="middle"
              text-anchor="middle"
            >
              SHOW
            </tspan>
          </text>
          <text filter="url(#f1)" fill="blue">
            <tspan
              font-size="15"
              x="49.8%"
              y="59.8%"
              dominant-baseline="middle"
              text-anchor="middle"
            >
              SHOW
            </tspan>
          </text>
          <text fill="url(#rainbow)">
            <tspan
              font-size="15"
              x="50%"
              y="60%"
              dominant-baseline="middle"
              text-anchor="middle"
            >
              SHOW
            </tspan>
          </text>
        </svg>
        {/* <div className="pixelate" style={{
                    backgroundImage: 'url('+PixelOverlay+')',
                    backgroundSize: "cover",
                    height: "100vh",
          
        }}></div> */}
        {/* <img src={PixelOverlay} className="pixelate" /> */}
        {/* <div className="pixelate" style={{backgroundImage: `url(${PixelOverlay})`}} /> */}
      </div>
      <NavBar style="fab" />
      <div id="tv" className="media" style={{backgroundImage: `url(${Gif1})`,  zIndex: -1, }}/>
      <div  className="tv-frame"/>
    <div className="backdrop" />

  
      <div id="tv" style={{backgroundImage: `url(${PixelOverlay})`,  opacity: 0.1, zIndex: 1}}/>
      {/* <div id="tv" style={{backgroundColor: 'red'}}/> */}

    </div>
  );
}
