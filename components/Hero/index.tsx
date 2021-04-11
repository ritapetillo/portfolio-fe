import React from "react";
import { Col } from "../../styles/uielements";
import Avatar from "../Svg/Avatar";
import AvatarNight from "../Svg/AvatarNight";

import { HeroContainer } from "./hero.elements";
import Typewriter from "typewriter-effect";
import { useAppContext } from "../../context/AppContext";

const Hero = () => {
  const { theme } = useAppContext();
  return (
    <HeroContainer>
      <Col sm={12} md={6}>
        <h1>
          My name is <span className="name">Rita</span>
        </h1>
        <h1>and I make websites!</h1>
      </Col>
      <Col sm={12} md={6} style={{ textAlign: "center" }}>
        {theme ? <Avatar /> : <AvatarNight />}{" "}
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("<Hello World!")
              .pauseFor(1500)
              .deleteChars(1)
              .typeString("/>")
              .start();
          }}
        />
      </Col>
    </HeroContainer>
  );
};

export default Hero;
