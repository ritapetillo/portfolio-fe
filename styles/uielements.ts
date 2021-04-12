import styled from "styled-components";

export const Main = styled.div`
  height: fit-content;
  width: 100vw;
  margin: 0 auto;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;
export const Container = styled.div`
  max-width: 1440px;
  width: 90vw;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 90vw;
  }
`;

interface ICol {
  xl?: number;
  lg?: number;
  md?: number;
  sm?: number;
}

export const Col = styled.div<ICol>`
  position: relative;
  padding-right: 15px;
  padding-left: 15px;
  /* @media (max-width: 767px) { */
  width: ${(props) => props.sm && `${100 / (12 / props.sm)}%`};
  flex: ${(props) => props.sm && `0 0 ${100 / (12 / props.sm)}%`};
  max-width: ${(props) => props.sm && `${100 / (12 / props.sm)}%`};
  /* } */
  @media (min-width: 768px) {
    width: ${(props) => props.md && `${100 / (12 / props.md)}%`};
    flex: ${(props) => props.md && `0 0 ${100 / (12 / props.md)}%`};
    max-width: ${(props) => props.md && `${100 / (12 / props.md)}%`};
  }
  @media (min-width: 1025px) {
    width: ${(props) => props.lg && `${100 / (12 / props.lg)}%`};
    flex: ${(props) => props.lg && `0 0 ${100 / (12 / props.lg)}%`};
    max-width: ${(props) => props.lg && `${100 / (12 / props.lg)}%`};
  }
  @media (min-width: 1200px) {
    width: ${(props) => props.xl && `${100 / (12 / props.xl)}%`};
    flex: ${(props) => props.xl && `0 0 ${100 / (12 / props.xl)}%`};
    max-width: ${(props) => props.xl && `${100 / (12 / props.xl)}%`};
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* margin-right: -15px;
  margin-left: -15px; */
  max-width: 1600px;
  width: 100%;
`;
export const CenteredRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const SpaceBetweenRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const RowColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 20px 0;
  /* margin-right: -15px;
  margin-left: -15px; */
  max-width: 1600px;
  width: 100%;
`;

//shapes
interface IEsagon {
  width: string;
  height: string;
  color: string;
}

export const Poligon = styled.div<IEsagon>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.color || props.theme.background};
  clip-path: polygon(
    50% 0%,
    90% 20%,
    100% 60%,
    75% 100%,
    25% 100%,
    0% 60%,
    10% 20%
  );
`;

export const Decagon = styled.div<IEsagon>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.theme.background};
  border: 10px solid ${(props) => props.color};
  clip-path: polygon(
    30% 0%,
    70% 0%,
    100% 30%,
    100% 70%,
    70% 100%,
    30% 100%,
    0% 70%,
    0% 30%
  );
`;
