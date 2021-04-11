import styled from "styled-components";
import { Row } from "../../styles/uielements";

export const MenuDesktopContainer = styled(Row)`
  justify-content: space-between;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuMobileContainer = styled(Row)`
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh-80px);
  margin-top: 80px;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
