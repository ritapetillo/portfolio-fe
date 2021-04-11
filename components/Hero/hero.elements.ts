import styled from "styled-components";
import { Row } from "../../styles/uielements";

export const HeroContainer = styled(Row)`
  align-items: center;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  h1 {
    font-weight: 500;
    font-size: 90px;
    margin: 0px 0px;
    line-height: 90px;
  }
  .Typewriter {
    margin-top: 10px;
  }
  .Typewriter__wrapper,
  .Typewriter__cursor {
    font-size: 40px;
  }
  min-height: calc(100vh - 80px);

  .name {
    color: rgb(254, 72, 141);
  }

  @media (max-width: 768px) {
    flex-wrap: no-wrap;
    flex-direction: column-reverse;
  }
`;
