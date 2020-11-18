/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import React from "react";
import CreativeCard from "./CreativeCard/CreativeCard";
import image from "./DemoSiteImages/selina01.jpg";

export default function CreativeDashboard() {
  return (
    <div>
      <CreativeCard
        image={image}
        text="jim beam can suck a fat one"
        button={true}
        position={[75, 40]}
        color="black"
        width={150}
        textAlign="right"
      >
        
      </CreativeCard>
      
    </div>
  );
}
