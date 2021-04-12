import styled from "styled-components";

interface ISingleAbout {
  guessed: boolean;
}

export const SingleAboutContainer = styled.div<ISingleAbout>`
  display: flex;
  padding: 10px;
  border: 5px dotted
    ${(props) => (props.guessed ? "lightgreen" : "transaprent")};
  border-radius: 5px;
  margin: 10px 0;
  h3 {
    text-align: left;
    margin-left: 10px;
  }

  transition: border 0.5s ease-in;
  &:hover {
    border: 3px dashed lightgreen;
    cursor: pointer;
  }
`;
