import { posix } from "node:path";
import { Fa500Px } from "react-icons/fa";
import styled from "styled-components";
import { Row, RowColumn } from "../../styles/uielements";

interface ISkillBar {
  percentage: string;
}
export const SkillsContainer = styled(RowColumn)`
  margin: 40px 0;
  .icons {
    font-size: 30px;
    padding: 3px 5px;
    svg {
      margin: 0 5px;
    }
  }
  h5 {
    text-align: left;
    margin: 10px;
    font-size: 28px;
    font-weight: 400;
  }
`;

export const SkillBar = styled.div<ISkillBar>`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: rgb(254, 72, 141, 0.2);
  border-radius: 5px 10px 10px 5px;
  padding: 2px;

  span {
    background-color: ${(props) => props.theme.pink};
    width: ${(props) => props.percentage};
    height: 10px;
    border-radius: 5px 10px 10px 5px;
  }
`;
