import React, { useEffect, useState } from "react";
import { AiOutlineLink } from "react-icons/ai";
import { SiGithub } from "react-icons/si";
import { CardContainer, CardHover, ImageWork } from "./cardwork.elements";

interface ICardWork {
  work: { title: string; imageUrl: string; url: string; github: string };
}
const CardWork = ({ work }: ICardWork) => {
  const [hover, setHover] = useState(false);

  return (
    <CardContainer
      onMouseEnter={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <ImageWork>
        <img src={work.imageUrl} alt="" />
      </ImageWork>
      {/* <h4>{work.title}</h4> */}
      <CardHover className="card__hover">
        <a href={work.github} target="_blank">
          <SiGithub />
        </a>
        <a href={work.url} target="_blank">
          {" "}
          <AiOutlineLink />
        </a>
      </CardHover>
    </CardContainer>
  );
};

export default CardWork;
