import React, { useRef } from "react";
import { Col, Row, RowColumn } from "../../styles/uielements";
import SingleSkill from "../SingleSkill/SingleSkill";
import skills from "../../assets/data/skills.json";

import { SkillsContainer, TitleSkills } from "./skills.elements";

const Skills = () => {
  return (
    <>
      <TitleSkills>
        <h2>What can I do?</h2>
      </TitleSkills>
      <SkillsContainer>
        <Col sm={12}>
          {skills.map((skill) => (
            <SingleSkill skill={skill} />
          ))}
        </Col>
      </SkillsContainer>
    </>
  );
};

export default Skills;
