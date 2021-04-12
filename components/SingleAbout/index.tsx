import React, { useState } from "react";
import { AiOutlineAim, AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import Icon from "../../lib/helpers/iconAbout";
import { Col } from "../../styles/uielements";
import { SingleAboutContainer } from "./singleabout.elements";
import { FaTrophy } from "react-icons/fa";

interface ISingleAbout {
  singleInfo: {
    text: string;
    icon: string;
    isTrue: boolean;
  };
}

const SingleAbout = ({ singleInfo }: ISingleAbout) => {
  const [revealed, setRevealed] = useState(false);

  return (
    <Col sm={12} md={6} onClick={() => setRevealed(!revealed)}>
      <SingleAboutContainer guessed={revealed && !singleInfo.isTrue}>
        {revealed && singleInfo.isTrue ? (
          <AiOutlineCheck style={{ color: "lightgreen" }} />
        ) : revealed && !singleInfo.isTrue ? (
          <AiOutlineClose style={{ color: "red" }} />
        ) : (
          <Icon icon={singleInfo.icon} />
        )}

        <h3>{singleInfo.text}</h3>
      </SingleAboutContainer>
    </Col>
  );
};

export default SingleAbout;
