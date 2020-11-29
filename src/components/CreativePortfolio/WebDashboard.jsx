/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import React, { useState } from "react";
import CreativeCard, {
  MediaCard,
  CardCollection,
} from "./CreativeCard/CreativeCard";
import { Data } from "../../config/web.config";
import NavBar from "../NavBar/NavBar";

export default function CreativeDashboard() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <NavBar style="fab" />
      {Data.map((d, i) => (
        <CreativeCard
          image={d.image}
          text={d.title}
          button={true}
          flip={false}
          position={d.textPosition}
          color={d.textColor}
          width={150}
          textAlign={d.textAlign}
          href={d.href}
       />
      ))}
    </div>
  );
}
