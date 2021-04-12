import styled from "styled-components";
import { Row, RowColumn } from "../../styles/uielements";

export const SkillsContainer = styled(RowColumn)`
  min-height: 100vh;
  display: flex;
  padding: 40px 20px;
  text-align: left;
  margin: 0;
  position: relative;
  h5 {
    text-align: left;
    margin: 10px;
    font-size: 26px;
    font-weight: 400;
    &:first-of-type{
      margin-top:40px;
    }

    
`;

export const TitleSkills = styled.div`
margin-top: 100px;
  margin-bottom: 80px;
  height:150px;
  display:flex;
  align-items:center;
  justify-content:center;
  text-align: left;
  tranform:
  top: -22%;
  right: 0;
  transform:skewY(-8deg);
  background: ${(props) => props.theme.green};

  h2 {
    font-size: 60px;
    font-weight: 500;
    text-align: center;
    position: relative;
    margin-top: 30px;
    margin-bottom: 50px;
    padding: 0;
    height: fit-content;
    &:after {
      content: "";
      position: absolute;
      bottom: -10px;
      right: 0px;
      height: 8px;
      width: 45%;
      background:${(p) => p.theme.pink};
    }
  }
  
  }
`;

export const SingleSkill = styled.div`
  color: black;
`;
