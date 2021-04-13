import styled from "styled-components";
import { Row, RowColumn } from "../../styles/uielements";

export const MenuDesktopContainer = styled(Row)`
  justify-content: space-between;
  span {
    cursor: pointer;
    &.hireMe {
      padding: 8px 15px;
      background-color: ${(p) => p.theme.green};
      border-radius: 20px;
      color: black;

      &:hover {
        opacity: 0.8;
      }
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuMobileContainer = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  height: calc(100vh-80px);
  display: none;
  &.active {
    transform: translatex(0);
  }

  span {
    display: block;
    cursor: pointer;
    &.hireMe {
      padding: 8px 15px;
      background-color: ${(p) => p.theme.pink};
      border-radius: 20px;
      color: black;
      &:hover {
        opacity: 0.8;
      }
    }
  }
  @media (max-width: 768px) {
    display: flex;
    padding: 50px 50px 20px;
    position: fixed;
    top: 0px;
    right: 0;
    height: 100vh;
    background: ${(p) => p.theme.green};
    color: black;
    width: 60vw;
    z-index: 2;
    transform: translatex(100%);
    transition: all 0.5s ease-in-out;
    span {
      padding: 30px 10px;
      font-size: 35px;
    }

    .close {
      cursor: pointer;
      position: fixed;
      top: 30px;
      right: 35px;
      color: ${(p) => p.theme.background};
      font-size: 40px;
    }
  }
`;
