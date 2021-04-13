import React, { useRef } from "react";
import { AboutContainer, TitleAbout } from "./about.elements";
import {
  IParallax,
  Parallax,
  ParallaxLayer,
  ParallaxProps,
} from "@react-spring/parallax";
import { Col, Poligon, Row, RowColumn } from "../../styles/uielements";
import SingleAbout from "../SingleAbout";
import data from "../../assets/data/aboutGame.json";

const About = () => {
  return (
    <AboutContainer id="about">
      <TitleAbout>
        <h2>Something about me</h2>
      </TitleAbout>
      <TitleAbout>
        <h5>
          Let's play a game! <span>Spot the false info.</span>
        </h5>
      </TitleAbout>
      <Row>
        {data.map((data, i) => {
          return <SingleAbout singleInfo={data} key={i} />;
        })}
      </Row>
    </AboutContainer>
  );
};

export default About;
