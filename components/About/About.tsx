import React, { useRef } from "react";
import { AboutContainer } from "./about.elements";
import {
  IParallax,
  Parallax,
  ParallaxLayer,
  ParallaxProps,
} from "@react-spring/parallax";
import { Col } from "../../styles/uielements";

const About = () => {
  const ref = useRef<IParallax>();

  return (
    <AboutContainer>
      <Col sm={12} md={6}>
        <Parallax ref={ref} pages={3} horizontal>
          <ParallaxLayer offset={0} speed={0.5}>
            <span
              onClick={() => {
                ref.current.scrollTo(1);
              }}
            >
              Layers can contain anything
            </span>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.5}>
            <span
              onClick={() => {
                ref.current.scrollTo(1);
              }}
            >
              Layers can contain anything
            </span>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.5}>
            <span
              onClick={() => {
                ref.current.scrollTo(2);
              }}
            >
              Layers can contain anything
            </span>
          </ParallaxLayer>
        </Parallax>
      </Col>
      <Col sm={12} md={6}>
        <h2>About me</h2>
      </Col>
    </AboutContainer>
  );
};

export default About;
