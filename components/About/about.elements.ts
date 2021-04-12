import styled from "styled-components";
import { Row, RowColumn } from "../../styles/uielements";

export const AboutContainer = styled(RowColumn)`
  min-height: 60vh;
  display: flex;
  padding: 100px 0 20px;
  text-align: left;
  margin-bottom: 200px;

  h5 {
    margin: 0;
    font-size: 20px;
    font-weight: 400;
    color: lightgreen;
  }

  h3 {
    font-weight: 400;
    font-size: 30px;
    text-align: center;
    width: 90%;
    line-height: 32px;
  }
  svg {
    font-size: 100px;
    color: ${(props) => props.theme.pink};
  }
`;

export const TitleAbout = styled.div`
  margin-bottom: 30px;
  text-align: left;
  h2 {
    font-size: 60px;
    font-weight: 500;
    text-align: center;
    position: relative;
    margin-top: 0;
    margin-bottom: 50px;
    padding: 0;
    height: fit-content;
    &:after {
      content: "";
      position: absolute;
      bottom: -10px;
      right: 0px;
      height: 8px;
      width: 45%;
      background: lightgreen;
    }
  }
  h5 {
    text-align: center;
    margin: 0;
    font-size: 26px;
    font-weight: 400;
    color: ${(props) => props.theme.pink};
    span {
      color: ${(props) => props.theme.color};
    }
  }
`;
