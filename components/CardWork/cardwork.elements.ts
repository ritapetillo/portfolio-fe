import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: rgba(233, 233, 233, 0.3);
  padding: 15px;
  border-radius: 10px;
  //   border: 5px solid ${(props) => props.theme.pink};
  height: 320px;
  width: 100%;
  margin: 20px 0;
  position: relative;
  h4 {
    margin-top: 20px;
    font-size: 30px;
    font-weight: 400;
  }
  &:hover {
    .card__hover {
      opacity: 1;
      background: rgba(0, 0, 0, 0.8);
    }
  }
`;
export const ImageWork = styled.div`
  height: 280px;
  width: 100%;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const CardHover = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0);
  opacity: 0;
  transition: all 1s ease-in-out;
  display: flex;

  svg {
    color: ${(p) => p.theme.green};
    cursor: pointer;
    font-size: 50px;
    margin: 10px;
    &:hover {
      color: ${(p) => p.theme.pink};
    }
  }
`;
