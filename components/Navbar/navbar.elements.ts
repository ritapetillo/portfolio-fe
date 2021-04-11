import styled from "styled-components";
import { Row } from "../../styles/uielements";

export const NavbarContainer = styled(Row)`
  padding: 20px 0px;
  justify-content: space-between;
  align-items: center;
  heigth: 80px;
  // position: fixed;
`;

export const ToggleContainer = styled.div`
  font-size: 30px;
  display: flex;
  align-items: center;
  svg {
    cursor: pointer;
    margin: 0 5px;
    &:first-of-type {
      font-size: 22px;
    }
    &:last-of-type {
      font-size: 22px;
    }
  }
`;
