import styled from "styled-components";
import { Row } from "../../styles/uielements";

export const NavbarContainer = styled(Row)`
  width: 90vw;
  padding: 20px 0px;
  justify-content: space-between;
  align-items: center;
  heigth: 80px;
  // position: fixed;
  .menu-open {
    cursor: pointer;
    display: none;
    @media (max-width: 768px) {
      display: block;
      font-size: 35px;
      margin-right: 10px;
    }
  }
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
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;
