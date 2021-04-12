import styled from "styled-components";
import { Row } from "../../styles/uielements";

export const QuoteContainer = styled(Row)`
  margin-top: 100px;
  height: 60vh;
  justify-content: center;
  align-items: center;
  position: relative;
  h2 {
    font-size: 30px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 50px;
  }
  .quote-sign {
    font-size: 30px;
    text-align: right;
    font-style: italic;
    font-weight: 400;
  }
  &:before {
    position: absolute;
    content: "";
    top: -140px;
    left: 10%;
    height: 300px;
    width: 8px;
    background: lightgreen;
    @media (max-width: 768px) {
      top: -50px;
      left: 5%;
      height: 8px;
      width: 90%;
    }
  }
`;
