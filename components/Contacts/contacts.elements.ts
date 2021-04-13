import styled from "styled-components";
import { Row } from "../../styles/uielements";
import { TitleAbout } from "../About/about.elements";
import { ImageWork } from "../CardWork/cardwork.elements";

export const ContactContainer = styled(Row)`
  min-height: 50vh;
  background-color: ${(p) => p.theme.color};
  color: ${(p) => p.theme.background};
  padding: 50px;

  .contact__image {
    display: flex;
    align-items: flex-end;
  }
  input {
    width: calc(50% - 10px);
    margin: 20px 0px 0;
    height: 50px;
    outline: none;
    padding: 10px;
    border-radius: 4px;
    border: none;
    color: ${(p) => p.theme.background};
    font-family: Poppins;

    &::placeholder {
      font-family: Poppins;
    }
    &:first-of-type {
      margin-right: 20px;
    }
    &:focus {
      border: 1px solid ${(p) => p.theme.pink};
    }
    background-color: ${(p) => p.theme.inputColor};
    @media (max-width: 450px) {
      width: 100%;
    }
  }
  textarea {
    border: none;
    font-family: Poppins;
    &:focus {
      border: 1px solid ${(p) => p.theme.pink};
    }
    padding: 10px;
    width: 100%;
    border-radius: 4px;
    margin-top: 20px;
    outline: none;
    background-color: ${(p) => p.theme.inputColor};
    color: ${(p) => p.theme.background};
    &::placeholder {
      font-family: Poppins;
    }
  }
  & > div {
    display: flex;
    flex-direction: column;
  }
  button {
    width: 100%;
    border: none;
    height: 50px;
    background: ${(p) => p.theme.pink};
    margin-top: 20px;
    font-size: 18px;
    font-family: Poppins;
    border-radius: 4px;
  }
`;

export const TitleContact = styled(TitleAbout)``;

export const ImageContact = styled(ImageWork)`
  height: ${(p) => p.height};
  width: ${(p) => p.width};
  margin-top: 100px;
`;

export const RowSocials = styled(Row)`
  justify-content: flex-end;
  margin-top: -40px;
  margin-bottom: 10px;
  svg {
    font-size: 40px;
    margin: 0 20px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
  @media (max-width: 450px) {
    margin-bottom: 50px;
  }
`;
