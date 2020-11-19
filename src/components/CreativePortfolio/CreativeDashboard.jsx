/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import React, {useState} from "react";
import CreativeCard, { MediaCard, CardCollection } from "./CreativeCard/CreativeCard";
import {Data} from "../../config/creative.config"
import NavBar from "../NavBar/NavBar";

export default function CreativeDashboard() {

  return (
    <div style={{backgroundColor: 'black'}}>
        <NavBar style="fab" />
    {
        Data.map((d,i) => (
            <CreativeCard
            image={d.content[0].image}
            text={d.title}
            button={true}
            position={d.textPosition}
            color={d.textColor}
            width={150}
            textAlign={d.textAlign}
          >
          <CardCollection >
              {
              d.content.map((c,i) => (
                <MediaCard link={c.href} image={c.image}/>
              ))
              }
      
          </CardCollection>
          </CreativeCard>
        ))
    }

    </div>
  );
}
