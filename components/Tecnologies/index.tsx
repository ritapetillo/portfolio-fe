import React from "react";
import { Col, RowColumn } from "../../styles/uielements";
import { TecnologiesContainer } from "./tecnologies.elements";
import reactLogo from "../../assets/svg/react.svg";
const Tecnologies = () => {
  return (
    <TecnologiesContainer>
      <img src="/svg/react.svg" />
      <img src="/svg/node.svg" />
      <img src="/svg/redux.svg" style={{ height: "35px" }} />
    </TecnologiesContainer>
  );
};

export default Tecnologies;
