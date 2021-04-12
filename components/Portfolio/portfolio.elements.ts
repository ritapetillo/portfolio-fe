import styled from "styled-components";
import { Row, RowColumn } from "../../styles/uielements";
import { TitleAbout } from "../About/about.elements";
import { TitleSkills } from "../Skills/skills.elements";

export const PortfolioContainer = styled(RowColumn)`
  min-height: 100vh;
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

export const TitlePortfolio = styled(TitleSkills)`
  transform: skewY(5deg);
  background-color: ${(p) => p.theme.pink};
  margin-bottom: 150px;

  h2 {
    &:after {
      background: ${(p) => p.theme.green};
    }
  }
`;
